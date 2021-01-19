/**
 * 1 - Add index to stack if current value is bigger or equal than top of stack.
 *
 * 2 - Otherwise, keep removing from stack until a number which is smaller or equal than current is found.
 *
 * 3 - Calculate area every time you remove:
 * 	if stack is empty -> area = input[top] * i
 * 	else						  -> area = input[top] * (i - stack.top - 1)
 */
export function maxHistogramArea(histogram: number[]): number {
	const stack = [];
	let maxArea = 0;

	histogram.forEach((value, index) => {
		// console.log({ value, index });

		const stackTop = stack[stack.length - 1];

		if (stack.length === 0 || value >= histogram[stackTop]) {
			stack.push(index);
		} else {
			const stackPop = stack.pop();
			let area = 0;

			if (stack.length === 0) {
				area = histogram[stackTop] * index;
			} else {
				area = histogram[stackTop] * (index - histogram[stackPop] - 1);
			}

			if (area > maxArea) {
				maxArea = area;
			}
		}
	});

	return maxArea;
}
