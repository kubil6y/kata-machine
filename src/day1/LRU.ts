/*
Least Recently Used

It is a caching mechanicsm.
*/

type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;
    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    }

    get(key: K): V | undefined {
        // check if the cache exists
        const node = this.lookup.get(key);
        if (!node) {
            return;
        }

        // update the value we found and move it to the front (most recently used)
        this.detach(node);
        this.prepend(node);

        // return out the value found or undefined if not exists
        return node.value;
    }

    update(key: K, value: V): void {
        // does it exist?
        let node = this.lookup.get(key);
        if (!node) {
            node = this.createNode(value);
            this.length++;
            this.prepend(node);
            this.trimCache();

            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
        } else {
            this.detach(node);
            this.prepend(node);
            node.value = value;
        }
    }

    private detach(node: Node<V>): void {
        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (this.head === node) {
            this.head = this.head.next;
        }

        if (this.tail === node) {
            this.tail = this.tail.prev;
        }

        node.next = undefined;
        node.prev = undefined;
    }

    private prepend(node: Node<V>): void {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    private createNode<V>(value: V): Node<V> {
        return { value };
    }

    private trimCache(): void {
        if (this.length <= this.capacity) {
            return;
        }

        // remove the tail
        const tail = this.tail as Node<V>;
        this.detach(this.tail!);

        const key = this.reverseLookup.get(tail) as K;
        this.lookup.delete(key);
        this.reverseLookup.delete(tail);
        this.length--;
    }
}
