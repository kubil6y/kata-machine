export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    // our matrix is a square
    const seen = new Array(graph.length).fill(false);
    // nothing has any parents
    const prev = new Array(graph.length).fill(-1);

    // we seen our source because our queue contains our source
    seen[source] = true;
    const q: number[] = [source];

    while (q.length) {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];
        for (let i = 0; i < graph.length; i++) {
            // if no edge continue
            if (adjs[i] === 0) {
                continue;
            }
            if (seen[i]) {
                continue;
            }
            seen[i] = true;
            prev[i] = curr; // thats its parent
            q.push(i);
        }
    }

    // build it backwards
    // walk our previouses until we get -1
    let curr = needle;
    // our path through the graph, starting at the needle back to the source
    const out: number[] = [];

    // until we found a point that have no parent
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr]; // who added me to this search
    }

    if (out.length) {
        return [source].concat(out.reverse());
    }

    return null;
}
