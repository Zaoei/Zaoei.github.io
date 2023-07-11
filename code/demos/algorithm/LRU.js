// 输入
// ```
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// ```

// 输出
// ```
// [null, null, null, 1, null, -1, null, -1, 3, 4]
// ```

// 解释
// ```
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3
// lRUCache.get(4);    // 返回 4
// ```

// 提示
// - 1 <= capacity <= 3000
// - 0 <= key <= 10000
// - 0 <= value <= 105
// - 最多调用 2 * 105 次 get 和 put

// 上题地址：https://leetcode.cn/problems/OrIXps/

/**

* @param {number} capacity

*/

var LRUCache = function (capacity) {
    this.cache = new Map();

    this.capacity = capacity;
};

/**

* @param {number} key

* @return {number}

*/

LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1;

    let value = this.cache.get(key);

    this.cache.delete(key);

    this.cache.set(key, value);

    return value;
};

/**

* @param {number} key

* @param {number} value

* @return {void}

*/

LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) this.cache.delete(key);

    if (this.cache.size === this.capacity) {
        const it = this.cache.keys();
        this.cache.delete(it.next().value);
    }

    this.cache.set(key, value);
};

/**

* Your LRUCache object will be instantiated and called as such:

* var obj = new LRUCache(capacity)

* var param_1 = obj.get(key)

* obj.put(key,value)

*/

// ************************************************************************************************************

/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */
// @lc code=start
/**
 * @param {number} capacity
 */
class LinkNode {
    key;
    value;
    pre;
    next;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    hashMap = new Map();
    size;
    capacity;
    virHeadNode;
    virTailNode;

    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.virHeadNode = new LinkNode(0, 0);
        this.virTailNode = new LinkNode(0, 0);
        this.virHeadNode.next = this.virTailNode;
        this.virTailNode.pre = this.virHeadNode;
    }

    remove(node) {
        let key = node.key;
        node.next.pre = node.pre;
        node.pre.next = node.next;

        return key;
    }

    get(key) {
        const node = this.hashMap.get(key);
        if (!node) return -1;
        this.moveToHead(node);
        return node.value;
    }

    put(key, value) {
        const node = this.hashMap.get(key);
        if (node) {
            node.value = value;
            this.hashMap.set(key, node);
            this.moveToHead(node);
            return;
        }
        if (this.size === this.capacity) {
            let tailNodeKey = this.removeTail();
            this.hashMap.delete(tailNodeKey);
            this.size--;
        }
        const newNode = new LinkNode(key, value);
        this.addHead(newNode);
        this.hashMap.set(key, newNode);
        this.size++;
    }

    addHead(node) {
        node.next = this.virHeadNode.next;
        node.pre = this.virHeadNode;
        this.virHeadNode.next.pre = node;
        this.virHeadNode.next = node;
    }

    removeTail() {
        if (this.virHeadNode.next == this.virTailNode) return -1;
        const tailNode = this.virTailNode.pre;
        return this.remove(tailNode);
    }

    moveToHead(node) {
        this.remove(node);
        this.addHead(node);
    }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);
lRUCache.put(3, 3);
