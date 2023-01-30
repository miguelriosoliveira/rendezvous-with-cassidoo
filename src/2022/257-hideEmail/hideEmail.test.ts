import { hideEmail } from './hideEmail';

describe('testing hideEmail', () => {
	it('should hide first part only (1)', () => {
		const hiddenEmail = hideEmail('example@example.com');
		expect(hiddenEmail).toBe('e*****e@example.com');
	});

	it('should hide first part only (2)', () => {
		const hiddenEmail = hideEmail('xikig71024@storypo.com');
		expect(hiddenEmail).toBe('x********4@storypo.com');
	});

	it('should hide first and second parts (1)', () => {
		const hiddenEmail = hideEmail('example+test@example.co.uk', true);
		expect(hiddenEmail).toBe('e**********t@e******.co.uk');
	});

	it('should hide first and second parts (2)', () => {
		const hiddenEmail = hideEmail('shang@optonline.net', true);
		expect(hiddenEmail).toBe('s***g@o********.net');
	});
});
