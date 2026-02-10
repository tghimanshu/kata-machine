export default class Stack<T> {
    public length: number;
    stack: T[];

    constructor() {
        this.length = 0;
        this.stack = [];
    }

    push(item: T): void {
        this.length++;
        this.stack.push(item);
        return;
    }
    pop(): T | undefined {
        if (this.length === 0) return undefined;

        this.length--;
        return this.stack.pop();
    }
    peek(): T | undefined {
        if (this.length === 0) return undefined;

        return this.stack[this.length - 1];
    }
}
