---
slug: resize
title: ResizeObserver
authors: Zaoei
tags: [js, ResizeObserver, resize]
---



<!--truncate-->

MDN 地址：https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver

# ResizeObserver 监听 DOM 尺寸变化

ResizeObserver 接口监视 Element 内容区域或者 SVGElement 边界尺寸的变化。

# 用法

## [构造函数](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver/ResizeObserver)

ResizeObserver 构造函数创建一个新的 ResizeObserver 对象，它可以用于监听 Element 内容盒或边框盒或者 SVGElement 边界尺寸的大小。

```js
new ResizeObserver(callback);
```

### callback

每当观测的元素调整大小时，调用该函数。该函数接收两个参数：

- entries: 一个 ResizeObserverEntry 对象数组，可以用于获取每个元素改变后的新尺寸。
- observer: 对 ResizeObserver 自身的引用，因此需要它的时候，你要从回调函数的内部访问。例如，这可用于在达到特定的情况时，自动取消对观察者的监听，但如果你不需要它，可以省略它。

## 实例方法

### disconnect

取消当前 resizeObserver 上，所有 DOM 元素的监听

```js
resizeObserver.disconnect();
```

### observe

用于监听指定的 Element 或 SVGElement

```js
observe(target);
observe(target, options);
```

- target: 需要监听的元素

### unobserve

取消指定 Element 或 SVGElement 的监听

```js
unobserve(target);
```

## MDN 例子片段

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      h1Elem.style.fontSize = `${Math.max(1.5, entry.contentBoxSize.inlineSize / 200)}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentBoxSize.inlineSize / 600)}rem`;
    } else {
      h1Elem.style.fontSize = `${Math.max(1.5, entry.contentRect.width / 200)}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }
});

resizeObserver.observe(divElem);

resizeObserver.unobserve(divElem);
```
