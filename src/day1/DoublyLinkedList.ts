type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = {
            value: item,
        };

        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("out of range");
        }

        this.length++;
        if (idx === this.length) {
            this.append(item);
        } else if (idx === 0) {
            this.prepend(item);
        } else {
            // in the middle
            const curr = this.getAt(idx) as Node<T>;
            const node: Node<T> = { value: item };
            // A - X - B
            // we put it before
            node.next = curr;
            node.prev = curr.prev;
            curr.prev = node;

            if (curr.prev) {
                curr.prev.next = curr;
            }
        }
    }

    append(item: T): void {
        const node: Node<T> = { value: item };
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {}

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined;
        }
        return node.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        return undefined;
    }

    private removeNode(node: Node<T>): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }

        // no item found to remove
        if (!curr) {
            return undefined;
        }

        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        // remove current
        if (curr.prev) {
            curr.prev = curr.next;
        }
        if (curr.next) {
            curr.next = curr.prev;
        }

        if (curr === this.head) {
            this.head = curr.next;
        }
        if (curr === this.tail) {
            this.tail = curr.prev;
        }

        // break current from linked list
        curr.prev = curr.next = undefined;
        return curr.value;
    }
}
