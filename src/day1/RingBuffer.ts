export default class RingBuffer<T> {
    private buffer: T[];
    private size: number = 10;

    private head: number;
    private tail: number;
    private length: number;

    constructor() {
        this.buffer = new Array<T>(this.size);

        this.head = 8;
        this.tail = 8;
        this.length = 0;
    }
    push(value: T): void {
        if (!this.buffer[this.head % this.size]) {
            this.length++;
            this.buffer[this.head % this.size] = value;
            return;
        }

        this.buffer[(this.tail + 1) % this.size] = value;
        this.tail += this.tail % this.size;
        this.length++;
        return;
    }
    pop(): T | undefined {
        if (this.length === 0) return undefined;
        const val = this.buffer[this.head % this.size];
        delete this.buffer[this.head % this.size];
        if (this.head === this.tail) {
            this.head = 0;
            this.tail = 0;
            return val;
        }
        this.head += (this.head + 1) % this.size;
        this.length--;
        return val;
    }
    get(index: number): T | undefined {
        if (index >= this.length) return undefined;

        return this.buffer[(this.head + index) % this.size];
    }
}
