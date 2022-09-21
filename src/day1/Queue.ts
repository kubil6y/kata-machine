type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const node: Node<T> = {
            value: item,
        };
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

/*
// NOTE MY SOLUTION

type Nullable<T> = T | null;

class Node<T> {
    public next: Nullable<Node<T>> = null;
    constructor(public data: T) {}
}

export default class Queue<T> {
    public length: number;
    private head: Nullable<Node<T>>;
    private tail: Nullable<Node<T>>;
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    enqueue(item: T): void {
        const node = new Node(item);
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    deque(): T | undefined {
        if (!this.head) {
            return;
        } else {
            const oldHead = this.head;
            this.head = this.head.next;
            if (this.length === 1) {
                this.tail = null;
            }
            this.length--;
            return oldHead.data;
        }
    }

    peek(): T | undefined {
        return this.head?.data;
    }
}
*/
