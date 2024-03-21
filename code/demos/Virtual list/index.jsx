import React, { useRef } from 'react';

const itemHeight = 50;

export default function index() {
  const [showList, setShowList] = useState([]);
  const [options, setOptions] = useState({
    offset: 1
  });

  const isRequestRef = useRef(false);
  const curContainerHeight = useRef(null);
  const curViewNum = useRef(null);
  const containerRef = useRef(null);
  const dataListRef = useRef([]);
  const topBlankFill = useRef({});
  
  // 每次组件重新渲染即用户滚动更改了数据之后需要将列表中我们还不知道的列表项高度更新到我们的缓存数据中去，以便下一次更新的时候能够正常渲染
  useEffect(() => {
    const doms = containerRef.current.children[0].children;
    const len = doms.length;
    // 因为一开始我们没有请求数据，所以即使组件渲染完了，但是没有列表项，此时不需要执行后续操作
    if (len) {
      // 遍历所有的列表结点，根据结点的真实高度去更改缓存中的高度
      for (let i = 0; i < len; i++) {
        const realHeight = doms[i].offsetHeight;
        const originHeight = showList[i].height;
        const dValue = realHeight - originHeight;
        // 如果列表项的真实高度就是缓存中的高度，则不需要进行更新
        if (dValue) {
          const index = showList[i].index;
          const allData = dataListRef.current;
          /**
           * 如果列表项的真实高度不是缓存中的高度，那么不仅要更新缓存中这一项的bottom和height属性
           * 在该列表项后续的所有列表项的top、bottom都会受到它的影响，所以我们又需要一层for循环进行更改缓存中后续的值
           */
          allData[index].bottom += dValue;
          allData[index].height = realHeight;
          /**
           * 注意：这里更改的一定要是缓存数组中对应位置后续的所有值，如果只改变的是showList值的话
           * 会造成dataList间断性的bottom和下一个top不连续，因为startIndex、endIndex以及空白填充区域都是依据top和bottom值来进行计算的
           * 所以会导致最后计算的结果出错，滑动得来的startIndex变化幅度大且滚动条不稳定，出现明显抖动问题
           */
          for (let j = index + 1, len = allData.length; j < len; j++) {
            allData[j].top = allData[j - 1].bottom;
            allData[j].bottom += dValue;
          }
        }
      }
    }
    // eslint-disable-next-line
  });

  // 滚动容器高度改变后执行的函数
  const changeHeight = useCallback(
    throttle(() => {
      // 容器高度，通过操作dom元素获取高度是因为它不一定是个定值
      curContainerHeight.current = containerRef.current.offsetHeight;
      // 列表最大数量，考虑到列表中顶部和底部可能都会出现没有展现完的item
      curViewNum.current = Math.ceil(curContainerHeight.current / itemHeight) + 1;
    }, 500),
    []
  );

  useEffect(() => {
    // 组件第一次挂载需要初始化容器的高度以及最大容纳值
    changeHeight();
    // 因为我们的可视窗口和浏览器大小有关系，所以我们需要监听浏览器大小的变化
    // 当浏览器大小改变之后需要重新执行changeHeight函数计算当前可视窗口对应的最大容纳量是多少
    window.addEventListener('resize', changeHeight);
    return () => {
      window.removeEventListener('resize', changeHeight);
    };
  }, [changeHeight]);

  // 组件刚挂载以及下拉触底的时候请求更多数据
  useEffect(() => {
    (async () => {
      // 只有当前不在请求状态的时候才可以发送新的请求
      if (!isRequestRef.current) {
        console.log('发送请求了');
        try {
          isRequestRef.current = true;
          const { offset } = options;
          let limit = 20;
          if (offset === 1) limit = 40;
          const {
            data: { comments, more }
          } = await axios({
            url: `http://localhost:3000/comment/music?id=${186015 - offset}&limit=${limit}&offset=1`
          });
          isNeedLoad.current = more;
          // 获取缓存中最后一个数据的索引值，如果没有，则返回-1
          const lastIndex = dataListRef.current.length
            ? dataListRef.current[dataListRef.current.length - 1].index
            : -1;
          // 先将请求到的数据添加到缓存数组中去
          dataListRef.current = [...dataListRef.current, ...comments];
          const dataList = dataListRef.current;
          // 将刚刚请求到的新数据做一下处理，为他们添加上对应的索引值、预估高度、以及元素首尾距离容器顶部的距离
          for (let i = lastIndex + 1, len = dataListRef.current.length; i < len; i++) {
            dataList[i].index = i;
            // 预估高度是列表项对应的最小高度
            dataList[i].height = 63;
            // 每一个列表项头部距离容器顶部的距离等于上一个元素尾部距离容器顶部的距离
            dataList[i].top = dataList[i - 1]?.bottom || 0;
            // 每一个列表项尾部距离容器顶部的距离等于上一个元素头部距离容器顶部的距离加上自身列表项的高度
            dataList[i].bottom = dataList[i].top + dataList[i].height;
          }
          isRequestRef.current = false;
          boxScroll();
        } catch (err) {
          console.log(err);
        } finally {
          isRequestRef.current = false;
        }
      }
    })();
    // eslint-disable-next-line
  }, [options]);

  const scrollHandle = () => {
    // 注意这个对应的是可视区第一个元素的索引值，而不是第多少个元素
    let startIndex = Math.floor(containerRef.current.scrollTop / itemHeight); // itemHeight是列表每一项的高度
    // 优化：如果是用户滚动触发的，而且两次startIndex的值都一样，那么就没有必要执行下面的逻辑
    if (!isNeedLoad && lastStartIndex.current === startIndex) return;
    isNeedLoad.current = false;
    lastStartIndex.current = startIndex;
    const containerMaxSize = curViewNum.current;
    /**
     * 解决滑动过快出现的白屏问题：注意endIndex要在startIndex人为改变之前就计算好
     * 因为我们实际上需要三板的数据用于兼容低性能的设备，用做上下滚动的缓冲区域，避免滑动的时候出现白屏
     * 现在的startIndex是可视区的第一个元素索引，再加上2倍可视区元素量，刚好在下方就会多出一板来当做缓冲区
     */
    // 此处的endIndex是为了在可视区域的下方多出一板数据
    let endIndex = startIndex + 2 * containerMaxSize - 1;
    // 接近滚动到屏幕底部的时候，就可以请求发送数据了，这个时候触底的并不是可视区的最后一个元素，而是多出那一版的最后一个元素触底了
    const currLen = dataListRef.current.length;
    if (endIndex > currLen - 1) {
      // 更新请求参数，发送请求获取新的数据(但是要保证当前不在请求过程中，否则就会重复请求相同的数据)
      !isRequestRef.current && setOptions((state) => ({ offset: state.offset + 1 }));
      // 如果已经滚动到了底部，那么就设置endIndex为最后一个元素索引即可
      endIndex = currLen - 1;
    }
    // 此处的endIndex是为了在可视区域的上方多出一板数据
    // 这里人为的调整startIndex的值，目的就是为了能够在可视区域上方多出一板来当做缓冲区
    if (startIndex <= containerMaxSize) {
      // containerMaxSize是我们之前计算出来的容器容纳量
      startIndex = 0;
    } else {
      startIndex = startIndex - containerMaxSize;
    }
    // 改变空白填充区域的样式，否则就会出现可视区域的元素与滚动条不匹配的情况，实现不了平滑滚动的效果
    topBlankFill.current = {
      // 起始索引就是缓冲区第一个元素的索引，索引为多少就代表前面有多少个元素
      paddingTop: `${startIndex * itemHeight}px`,
      // endIndex是缓冲区的最后一个元素，可能不在可视区内；用dataListRef数组最后一个元素的索引与endIndex相减就可以得到还没有渲染元素的数目
      paddingBottom: `${(dataListRef.current.length - 1 - endIndex) * itemHeight}px`
    };
    // 使用slice方法截取数据，但是要记住第二个参数对应的索引元素不会被删除，最多只能删除到它的前一个，所以我们这里的endIndex需要加一
    setShowList(dataListRef.current.slice(startIndex, endIndex + 1));
  };

  // 利用请求动画帧做了一个节流优化
  let then = useRef(0);
  const boxScroll = () => {
    const now = Date.now();
    /**
     * 这里的等待时间不宜设置过长，不然会出现滑动到空白占位区域的情况
     * 因为间隔时间过长的话，太久没有触发滚动更新事件，下滑就会到padding-bottom的空白区域
     * 电脑屏幕的刷新频率一般是60HZ，渲染的间隔时间为16.6ms，我们的时间间隔最好小于两次渲染间隔16.6*2=33.2ms，一般情况下30ms左右，
     */
    if (now - then.current > 30) {
      then.current = now;
      // 重复调用scrollHandle函数，让浏览器在下一次重绘之前执行函数，可以确保不会出现丢帧现象
      window.requestAnimationFrame(scrollHandle);
    }
  };

  return (
    <div className='container'>
      <div className='scroll-box' ref={containerRef} onScroll={boxScroll}>
        <div style={topBlankFill.current}>
          {showList.map((item) => (
            <div className='item' key={item.commentId || Math.random() + item.comments}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
