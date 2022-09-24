// Typically, quicksort is significantly faster in practice than other Θ(nlogn)
// algorithms, because its inner loop can be efficiently implemented on most
// architectures, and in most real-world data, it is possible to make design
// choices which minimize the probability of requiring quadratic time.
function qs(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }
    const pivotIdx = partition(arr, low, high);
    // we are not including pivot
    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, high);
}

// partition returns pivot index
function partition(arr: number[], low: number, high: number): number {
    // this could cause o(n2) issue
    const pivot = arr[high];
    let idx = low - 1; // start from left of it
    // walk from the low to high (not inluding)
    for (let i = low; i < high; i++) {
        // compare each element to pivot
        if (arr[i] <= pivot) {
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }
    idx++;
    arr[high] = arr[idx];
    arr[idx] = pivot;
    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
