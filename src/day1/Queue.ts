type Node<T> = {
    val: T,
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        const node = {val: item} as Node<T>;

        if (!this.tail) {
            this.head = node;
            this.tail = this.head;
        }

        this.tail.next = node;
        this.tail = node;

    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            const head = this.head;
            this.head = this.tail = undefined;

            // NOTE: Optional: free the space; (free memory in languages like C and C++)
            head.next = undefined;

            this.length--;
            return head.val;
        }

        const head = this.head;
        this.head = this.head.next;

        // NOTE: Optional: free the space; (free memory in languages like C and C++)
        this.length--;
        head.next = undefined;

        return head.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
