// remember recursive function has three stages
// 1. pre recursion
// 2. recurse
// 3. post recursion
// NOTE: creating a helper function with recursion is always makes things clear

// Results of these 3 algorithms:
// 1. PRE_ORDER: root at the beginning
// 2. IN_ORDER: root at the middle
// 3. POST_ORDER: root at the end
function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // pre recursion
    // visit and push to path
    path.push(curr.value);

    // recursion
    walk(curr.left, path);
    walk(curr.right, path);

    // post recursion
    return path;
}

// returns visited nodes in order
export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
