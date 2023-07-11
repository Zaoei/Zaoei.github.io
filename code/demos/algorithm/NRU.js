let length = 5;

class Memory {
    length = 0;
    fist_pointer = null;
    last_pointer = null;
    w_pointer = null;
    constructor(length) {
        this.length = length;
        this.createMemory(this.length);
    }
    createMemory(length) {
        for (let i = 0; i < length; i++) {
            const memoryBlock = new MemoryBlock(length - i - 1);
            // 第一个创建的是尾，最后创建的是头
            if (i === 0) {
                this.last_pointer = memoryBlock;
            } else if (i === length - 1) {
                memoryBlock.next = this.w_pointer;
                this.fist_pointer = memoryBlock;
                this.last_pointer.next = memoryBlock; // 尾节点指向首节点，形成环
            } else {
                memoryBlock.next = this.w_pointer;
            }
            this.w_pointer = memoryBlock; // 缓存当前的节点，用来与下一个创建的节点建立关系
        }
    }
    write(value) {
        while (true) {
            if (this.w_pointer.access) {
                this.w_pointer.setAccess(0);
                this.w_pointer = this.w_pointer.next;
            } else {
                this.w_pointer.setAccess(1);
                this.w_pointer.write(value);
                break;
            }
        }
    }
    read(offset) {
        const read_memoryBlock = getMemory(offset);
        read_memoryBlock.setAccess(1);
        return read_memoryBlock.value;
    }
    getMemory(offset) {
        const memoryBlock = this.fist_pointer;
        for (let i = 1; i <= offset; i++) {
            memoryBlock = memoryBlock.next;
        }
        return memoryBlock;
    }
}

class MemoryBlock {
    index = 0;
    access = 0;
    value = null;
    next = null;
    constructor(index) {
        this.index = index;
    }
    getAccess() {
        return this.access;
    }
    setAccess(access) {
        this.access = access;
    }
    write(value) {
        this.value = value;
    }
    read() {
        return this.value;
    }
}

let memory = new Memory(5)

for (let i = 1; i <= 11; i++) {
    memory.write(11)
}

console.log(memory.fist_pointer)
