import { shiftRight } from './shiftRight';

describe('#shiftRight', () => {
	it('should shift elements to the right from the provided index', () => {
		const arr = [1, 3, 5, null, null];
		shiftRight(arr, 2);
		expect(arr).toStrictEqual([1, 3, null, 5, null]);
	});

	it('should shift at the start moving every element forward', () => {
		const arr = [1, 2, 3, null];
		shiftRight(arr, 0);
		expect(arr).toStrictEqual([null, 1, 2, 3]);
	});

	it('should preserve array length by overwriting the last slot', () => {
		const arr = [1, 2, 3, 4];
		shiftRight(arr, 2);
		expect(arr).toStrictEqual([1, 2, null, 3]);
	});

	it('should loop only the required positions', () => {
		const raw = [1, 2, 3, 4];
		let writes = 0;
		const arr = new Proxy(raw, {
			set(target, prop, value) {
				writes++;
				return Reflect.set(target, prop, value);
			},
		});

		shiftRight(arr, 2);

		expect(writes).toBe(2);
		expect(raw).toStrictEqual([1, 2, null, 3]);
	});
});
