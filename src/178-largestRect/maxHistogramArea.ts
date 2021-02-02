/**
 * 1 - Add index to stack if current value is bigger or equal than top of stack.
 *
 * 2 - Otherwise, keep removing from stack until a number which is smaller or equal than current is found.
 *
 * 3 - Calculate area every time you remove:
 * 	if stack is empty -> area = input[top] * i
 * 	else						  -> area = input[top] * (i - stack.top - 1)
 */
export default function maxHistogramArea(histogram: number[]): number {
	const stack = [];
	let maxArea = 0;

	// console.log({ histogram });

	[...histogram, 0].forEach((value, index) => {
		// console.log({ value, index });

		const stackTop = stack[stack.length - 1];

		// console.log({ stack });
		// console.log({ stackTop, 'histogram[stackTop]': histogram[stackTop] });

		if (stack.length === 0 || value >= histogram[stackTop]) {
			// console.log('stack is empty 1');
			stack.push(index);
		} else {
			const stackPop = stack.pop();
			let area = 0;

			// console.log({ stackPop, stack });
			if (stack.length === 0) {
				// console.log('stack is empty 2');
				area = histogram[stackPop] * index;
				stack.push(index);
			} else {
				const newStackTop = stack[stack.length - 1];

				// console.log({ newStackTop, histogram, 'histogram[stackPop]': histogram[stackPop] });
				// console.log(
				// 	`area = histogram[stackPop] * (index - newStackTop - 1)\narea = ${histogram[stackPop]} * (${index} - ${newStackTop} - 1)`,
				// );

				area = histogram[stackPop] * (index - newStackTop - 1);
			}

			// console.log({ area, maxArea });

			if (area > maxArea) {
				maxArea = area;
			}
		}
	});

	// console.log({ maxArea });

	return maxArea;
}
