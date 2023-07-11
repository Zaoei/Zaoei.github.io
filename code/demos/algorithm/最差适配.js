const utils = require('./utils/index.js');

const ListNode = utils.ListNode;

class WF {
    list = null;

    constructor(list) {
        this.list = list;
    }

    write(size) {
        let listNode = this.list;
        let bestNode = null;
        while (listNode) {
            if (listNode.size >= size && !listNode.access) {
                if (!bestNode) {
                    bestNode = listNode;
                } else if(bestNode.size < listNode.size){
                    bestNode = listNode
                }
            }
            listNode = listNode.next;
        }
        if(bestNode){
            const nodeSize = bestNode.size
            if (nodeSize > size) {
                bestNode.setSize(size);
                const nextListNode = bestNode.next;
                const newListNode = new ListNode(nodeSize - size);
                bestNode.next = newListNode;
                newListNode.next = nextListNode;
            }
            bestNode.setAccess(1);
        } else {
            throw '未找到符合要求的:  ' + size;
        }

    }
}

utils.example(WF);
