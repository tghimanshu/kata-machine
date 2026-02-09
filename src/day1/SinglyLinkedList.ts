type Node<T> = {
    val: T;
    next?: Node<T>;
};
export default class SinglyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        let node = { val: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
        }
        node.next = this.head;
        this.head = node;
        return;
    }

    insertAt(item: T, idx: number): void {
        if (!this.head || idx === 0) {
            this.prepend(item);
        }

        let curr = this.head;
        let i = 0;
        while (i + 1 < idx) {
            i++;
            curr = curr?.next;
        }

        if (!curr) return undefined;

        let node = { val: item } as Node<T>;

        node.next = curr.next;
        curr.next = node;
        this.length++;

        return undefined;
    }

    append(item: T): void {
        const node = { val: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
        }

        this.tail.next = node;
        this.tail = this.tail.next;
    }

    remove(item: T): T | undefined {
        if (this.head && this.head.val === item) {
            this.head = this.head.next;
            if (this.head === undefined) this.tail = undefined;
            this.length--;
            return item;
        }

        let curr = this.head;
        while (curr) {
            if (curr.next?.val === item) {
                break;
            }

            curr = curr?.next;
        }
        if (!curr) return undefined;

        curr.next = curr.next?.next;
        if (curr.next === undefined) this.tail = curr;
        this.length--;

        return item;
    }

    get(idx: number): T | undefined {
        let curr = this.head;
        let i = 0;
        while (curr) {
            if (i === idx) {
                return curr.val;
            }
            curr = curr?.next;
            i++;
        }

        return undefined;
    }

    removeAt(idx: number): T | undefined {
        let curr = this.head;

        if (idx === 0) {
            this.head = this.head?.next;
            this.length--;
            return curr?.val;
        }
        let i = 0;

        while (i + 1 < idx) {
            i++;
            curr = curr?.next;
        }

        if (!curr) return undefined;

        let node = curr.next;
        curr.next = curr.next?.next;
        if (curr.next === undefined) this.tail = curr;
        this.length--;
        return node?.val;
    }

    print(): string {
        let curr = this.head;
        let res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }

        return res.join("->");
    }
}

