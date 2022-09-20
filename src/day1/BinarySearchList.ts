export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;
    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        const guess = haystack[middle];
        if (needle === guess) {
            return true;
        } else if (needle > guess) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    return false;
}
