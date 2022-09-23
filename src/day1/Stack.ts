type Node<T> = {
    value: T;
    next?: Node<T> | undefined;
};

export default class Stack<T> {
    public length: number;
    private _tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this._tail = undefined;
    }

    push(item: T): void {
        const node: Node<T> = {
            value: item,
        };
        this.length++;
        if (!this._tail) {
            this._tail = node;
        } else {
            node.next = this._tail;
            this._tail = node;
        }
    }

    pop(): T | undefined {
        if (!this._tail) {
            return;
        }
        const oldTail = this._tail;
        this._tail = this._tail.next;
        this.length--;
        return oldTail.value;
    }

    peek(): T | undefined {
        return this._tail?.value;
    }
}
