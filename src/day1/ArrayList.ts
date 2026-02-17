export default class ArrayList<T> {
    public length: number;
    array: T[];

    constructor(length: number) {
        this.length = 0;
        this.array = new Array<T>();
    }

    prepend(item: T): void {
        return this.insertAt(item, 0);
    }
    insertAt(item: T, idx: number): void {
        if (idx >= this.length) {
            this.array[this.length] = item;
            this.length++;

            return undefined;
        }
        let i = this.length + 1;
        while (i >= idx) {
            this.array[i] = this.array[i - 1];
            i--;
        }
        this.array[idx] = item;

        this.length++;
        return undefined;
    }

    append(item: T): void {
        this.array[this.length] = item;
        this.length++;

        return;
    }
    remove(item: T): T | undefined {
        let idx = 0;
        if (this.array[idx] === item) return this.removeAt(idx);
        while (idx < this.length) {
            if (this.array[idx] === item) {
                break;
            }
            idx++;
        }
        return this.removeAt(idx);
    }

    get(idx: number): T | undefined {
        return this.array[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) return undefined;

        const val = this.array[idx];

        while (idx < this.length) {
            this.array[idx] = this.array[idx + 1];
            idx++;
        }

        this.length--;
        return val;
    }
}
