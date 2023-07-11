const utils = require('./utils/index.js');

const ListNode = utils.ListNode;


class NF {
    list = null;
    pointer = null;
    constructor(size) {
        this.list = new List(size);
        this.pointer = this.list;
    }
    write(size) {
        const listNode = this.pointer;
        while (true) {
            if (listNode.size >= size && !listNode.access) {
                listNode.setAccess(1);
                const listNodeSize = listNode.size;
                
                // 如果空间还有余留，进行分割
                if (listNodeSize > size) {
                    listNode.setSize(size);
                    const nextListNode = listNode.next;
                    const newListNode = new ListNode(listNodeSize - size);
                    listNode.next = newListNode;
                    newListNode.next = nextListNode;
                }

                this.pointer = listNode.next;
                break;
            } else if (!listNode.next) { // 如果当前节点是尾节点，把它指向首节点
                listNode = this.list
            } else if(listNode.next === this.pointer){ // 查找一圈后，没有找到适合的报错
                throw '未找到符合要求的';
            }

            listNode = listNode.next;
        }
    }
}

utils.example(NF);
