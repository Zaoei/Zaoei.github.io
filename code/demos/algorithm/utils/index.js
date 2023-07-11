class ListNode {
    constructor(size) {
        this.size = size;
    }
    size = 0;
    access = 0;
    next = null;

    setAccess(access) {
        this.access = access;
    }
    setSize(size) {
        this.size = size;
    }
}

class List {
    list = {};
    constructor(size) {
        this.initList(generateSpace(size));
    }
    initList(listData) {
        let listNode = null;
        listData.forEach((listItem, index) => {
            if (index === 0) {
                listNode = new ListNode(listItem);
                this.list = listNode;
            } else {
                listNode.next = new ListNode(listItem);
                listNode = listNode.next;
            }
        });
    }
    write() {}
}

const generateSpace = (num) => {
    const memorySpace = [];
    for (let i = 0; i < num; i++) {
        const spaceSize = parseInt(Math.random() * 10 + 1, 10);
        memorySpace.push(spaceSize);
    }
    return memorySpace;
};

const output = (list) => {
    let node = list;
    let index = 0;
    console.log('******************start*********************');
    console.log('   index   |   size   |    access    ');
    while (node) {
        console.log(`   ${++index}   -    ${node.size}    -     ${node.access}     `);
        node = node.next;
        if (node === list) {
            break;
        }
    }
    console.log('********************end*******************');
};

const example = (Advice) => {
    const list = new List(5);
    output(list.list);

    const advice = new Advice(list.list);

    const values = generateSpace(4);
    console.log('任务集: ' + values.join('-'));

    try {
        values.forEach((item) => {
            advice.write(item);
        });
    } catch (error) {
        console.log(error, 'error')
    }

    output(advice.list);
};


const exampleContrast = (Advice) => {
    const list = new List(5);
    output(list.list);

    const advice = new Advice(list.list);
    
    const values = generateSpace(4);
    console.log('任务集: ' + values.join('-'));

    try {
        values.forEach((item) => {
            advice.write(item);
        });
    } catch (error) {
        console.log(error, 'error')
    }

    output(advice.list);
};

module.exports = {
    ListNode,
    List,
    generateSpace,
    output,
    example,
    exampleContrast
};
