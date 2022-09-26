type Nullable<T> = T | null;

function walk<T>(node: Nullable<BinaryNode<T>>, path: T[]): T[] {
    if (node === null) {
        return path;
    }

    walk(node.left, path);
    path.push(node.value);
    walk(node.right, path);

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
