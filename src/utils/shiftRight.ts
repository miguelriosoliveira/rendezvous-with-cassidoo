import { BufferArray } from '../2025/430-merge/merge';

export function shiftRight(arr: BufferArray, index: number) {
	for (let i = arr.length - 1; i > index; i--) {
		arr[i] = arr[i - 1];
	}
	arr[index] = null;
}
