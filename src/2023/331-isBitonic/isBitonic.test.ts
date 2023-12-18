import { isBitonic } from './isBitonic';

describe('#isBitonic', () => {
	it('should return the correct peak for a bitonic sequences', () => {
		expect(isBitonic([1, 2, 3, 2])).toStrictEqual({ isBitonic: true, peak: 3 });
		expect(isBitonic([1, 2, 3, 4, 5, 6, 7, 8, 7, 6])).toStrictEqual({ isBitonic: true, peak: 8 });
		expect(isBitonic([1, 8, 7, 6])).toStrictEqual({ isBitonic: true, peak: 8 });
		expect(isBitonic([3, 4, 5, 5, 5, 2, 1])).toStrictEqual({ isBitonic: true, peak: 5 });
	});

	it('should return null as peak for non-bitonic sequences', () => {
		expect(isBitonic([1, 2, 3])).toStrictEqual({ isBitonic: false, peak: null });
		expect(isBitonic([5, 2, 1])).toStrictEqual({ isBitonic: false, peak: null });
		expect(isBitonic([])).toStrictEqual({ isBitonic: false, peak: null });
	});
});
