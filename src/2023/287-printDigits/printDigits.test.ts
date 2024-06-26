import { printDigits } from './printDigits';

describe('#printDigits', () => {
	it('should print digits from 0 to 100', () => {
		const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
		printDigits();
		expect(logSpy).toHaveBeenCalledTimes(101);
		logSpy.mockRestore();
	});
});
