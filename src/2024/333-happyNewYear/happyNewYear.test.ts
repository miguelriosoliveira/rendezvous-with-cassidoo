import { happyNewYear } from './happyNewYear';

describe('#happyNewYear', () => {
	const log = console.log;

	beforeAll(() => {
		console.log = vi.fn();
	});

	afterAll(() => {
		console.log = log;
	});

	it('should print "Happy new year!"', () => {
		happyNewYear();
		expect(console.log).toHaveBeenCalledWith('Happy new year!');
	});
});
