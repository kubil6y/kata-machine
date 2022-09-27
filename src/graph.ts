/*
Terminology of Graphs
cyclic: When you start at Node(x), follow the links, and end back at Node(x)
acyclic: A graph that contains no cycles.
connected: When every node has a path to another node.
directed: When there is a diretion to the connections. Think Twitter.
undirected: !directed. Think Facebook.
weighted: The edges have a weight associated with them. Think Maps.
dag: Directed, Acyclic graph

Implementation Terms
node: a point or vertex on the graph
edge: the connection betwixt two nodes.

Big O
BigO is commonly stated in terms of V and E where V stands for vertices and E
stands for edges. So O(V*E) means what we will check every vertex, and on every
vertex we check every edge.

How are graphs represented:
- adjacency list (generally what we see)
- adjacency matrix (requires O(V^2) to setup, if you have 100 items you need
100x100 matrix and it grows. memory hog!)
*/

export function add_node_list(
    list: WeightedAdjacencyList,
    from: number,
    to: number,
    weight: number,
): void {
    let l = list[from];
    if (!l) {
        l = list[from] = [];
    }

    l.push({ to, weight });
}
