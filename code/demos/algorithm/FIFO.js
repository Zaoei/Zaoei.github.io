class FIFO {
    r_pointer = 0;

    w_pointer = 0;

    cache_length = 8;

    cache = [];

    read() {
        if (--this.r_pointer === -1) {
            throw '下溢';
        }

        this.w_pointer--;
        const value = this.cache.shift()
        return value;
    }

    write(value) {
        if (this.w_pointer === this.cache_length) {
            throw '溢出';
        }

        this.r_pointer++;

        this.cache[this.w_pointer++] = value;
    }
}

let fifo = new FIFO();

fifo.write(1);

fifo.write(1);

fifo.write(1);

fifo.write(1);

fifo.read();

fifo.write(1);

fifo.read();

fifo.write(1);

fifo.write(1);

fifo.read();

fifo.write(1);
