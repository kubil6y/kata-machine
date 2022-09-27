/*
The Heap Data Stucture

The simplest way to put it is a binary tree where every child and grand child
is smaller (MaxHeap), or larger (MinHeap) than the current node. 

- Heaps are weak ordered.
- Heaps are always full or complete tree. It does not have empty spaces.
- Whenever a node is added, we must adjust the tree
- Whenever a node is deleted, we must adjust the tree
- There is no traversing the tree.

NOTE: in real programming languages int/int = int (13/2 = 6)

Some cool characteristics
- It is self balancing
- It can be used for priority
- Funnest data structure to implement, but easy to get wrong!
*/

export default class MinHeap {
    public length: number;

    constructor() {}

    insert(value: number): void {}

    // a.k.a poll/pop
    delete(): number {}

    private heapify_down(idx: number): void {}

    private heapify_up(idx: number): void {}

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private left_child(idx: number): number {
        return idx * 2 + 1;
    }

    private right_child(idx: number): number {
        return idx * 2 + 2;
    }
}
