function search<T>(curr: BinaryNode<T> | null, needle: T): boolean {
    if (curr === null) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    }

    if (curr.value > needle) {
        return search(curr.left, needle);
    } else {
        return search(curr.right, needle);
    }
}

// we do not measure binary search trees with O(logn) instead we use its height
// O(h). if it is a complete binary tree we can say O(logn). this makes it
// O(logn-n)
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}
