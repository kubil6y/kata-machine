/*
 *export default function bubble_sort(arr: number[]): void {
 *    for (let i = 0; i < arr.length; ++i) {
 *        for (let j = 0; j < arr.length - 1 - i; ++j) {
 *            if (arr[j] > arr[j + 1]) {
 *                const temp = arr[j];
 *                arr[j] = arr[j + 1];
 *                arr[j + 1] = temp;
 *            }
 *        }
 *    }
 *}
 *
 */

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
