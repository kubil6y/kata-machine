export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
