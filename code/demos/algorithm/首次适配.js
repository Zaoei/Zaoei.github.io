const utils = require('../utils/index.js');

const ListNode = utils.ListNode;

class FF {
    list = null;

    constructor(list) {
        this.list = list;
    }

    write(size) {
        let listNode = this.list;
        while (true) {
            if (listNode.size >= size && !listNode.access) {
                const listNodeSize = listNode.size;
                if (listNodeSize > size) {
                    listNode.setSize(size);
                    const nextListNode = listNode.next;
                    const newListNode = new ListNode(listNodeSize - size);
                    listNode.next = newListNode;
                    newListNode.next = nextListNode;
                }
                listNode.setAccess(1);
                break;
            } else if (!listNode.next) {
                throw '未找到符合要求的:  ' + size;
            }

            listNode = listNode.next;
        }
    }
}

utils.example(FF);
