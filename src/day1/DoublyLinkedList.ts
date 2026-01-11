type Node<T> = {
    value: T,
    next?: Node<T>;
    prev?: Node<T>;
}
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        return;
    }
    insertAt(item: T, idx: number): void {
    }
    append(item: T): void {

    }
    remove(item: T): T | undefined {

    }
    get(idx: number): T | undefined {

    }
    removeAt(idx: number): T | undefined {

    }
}
