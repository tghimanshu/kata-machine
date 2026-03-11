export default class RingBuffer<T> {
    // NOTE: The Following Class Doesn't Alow for Dynamic Resizing, It is a Fixed Size Buffer, If you want to add more than 10 items, it will start overwriting the old ones.
    private buffer: T[];
    private size: number = 10;

    private head: number;
    private tail: number;
    private length: number;

    constructor() {
        this.buffer = new Array(this.size);
        this.length = 0;
        this.head = 0;
        this.tail = 0;
    }
    push(value: T): void {
        this.buffer[this.tail] = value;
        this.length++;

        this.tail = (this.tail + 1) % this.size;
    }
    pop(): T | undefined {
        if (this.length === 0) return undefined;

        let val = this.buffer[this.head];
        delete this.buffer[this.head];
        this.length--;
        this.head = (this.head + 1) % this.size;

        return val;
    }
    get(index: number): T | undefined {
        if (index < 0 || index >= this.length) return undefined;

        return this.buffer[(this.head + index) % this.size];
    }
}
