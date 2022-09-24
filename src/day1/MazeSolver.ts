type Point = {
    x: number;
    y: number;
};

/*
const maze: string[] = [
    // S: start, E: ending
    "#####E#",
    "#     #",
    "#S#####",
];

Base Cases:
    1. Off the map
    2. Its a wall
    3. if we have seen it (avoid infinite loops)
    4. Its the end
*/

const dir = [
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // top
    [0, 1], // bottom
];

// NOTE: maze is a square
// in maze questions first you traverse the columns, then the rows.
function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][], // memo
    path: Point[], // memo
): boolean {
    // 1. Off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze[0].length
    ) {
        return false;
    }

    // 2. Its a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. if we have seen it (avoid infinite loops)
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 4. Its the end
    if (curr.x === end.x && curr.y === end.y) {
        // return only if the path reaches to the end!
        // till then we will recurse and if it fails,
        // we will path.pop() then go back!
        path.push(end);
        return true;
    }

    // three recurse cases:
    // 1. pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // 2. recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        const newCurr = {
            x: curr.x + x,
            y: curr.y + y,
        };
        if (walk(maze, wall, newCurr, end, seen, path)) {
            return true;
        }
    }

    // 3. post
    // if it does not match conditions, we pop it and walk backwards!
    // then return false
    path.pop();
    return false;
}

// return a list of points from the start to the end
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    // fill seen array with false
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
