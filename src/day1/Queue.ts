type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    head?: Node<T>;
    tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = { val: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            const val = this.head.val;

            this.head = this.tail = undefined;
            this.length--;
            return val;
        }

        const val = this.head.val;
        this.head = this.head.next;
        this.length--;
        return val;
    }
    peek(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        return this.head.val;
    }
}
