/*
Write a set of tests for a function that adds numbers from many invocations, until it sees an empty invocation.
Consider edge cases, side effects, incorrect usage of the function, and expected values!

Function to test:

function addg(a) {
    if (a === undefined) return a;
    return function g(b) {
        if (b !== undefined) {
            return addg(a+b);
        }
        return a;
    };
}

Example usage:
addg()           // undefined
addg(2)()        // 2
addg(2)(7)()     // 9
addg(3)(4)(0)()  // 7
*/

export function addg(a?: number): unknown {
	if (a === undefined) return a;
	return function g(b?: number) {
		if (b !== undefined) {
			return addg(a + b);
		}
		return a;
	};
}
