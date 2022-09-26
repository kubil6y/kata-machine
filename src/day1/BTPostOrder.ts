type Nullable<T> = T | null;

function walk<T>(node: Nullable<BinaryNode<T>>, path: T[]): T[] {
    if (node === null) {
        return path;
    }

    walk(node.left, path);
    walk(node.right, path);
    path.push(node.value);

    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
