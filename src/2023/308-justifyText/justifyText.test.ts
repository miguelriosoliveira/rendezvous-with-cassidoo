import { justifyText } from './justifyText';

describe('justifyText', () => {
	it('should justify with 16 of max width', () => {
		const strings = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];
		const maxWidth = 16;
		expect(justifyText(strings, maxWidth)).toStrictEqual([
			'This    is    an',
			'example  of text',
			'justification.  ',
		]);
	});

	it('should handle last part with perfect fit', () => {
		const strings = ['This', 'is', 'a', 'justification', 'example', 'of', 'text'];
		const maxWidth = 16;
		expect(justifyText(strings, maxWidth)).toStrictEqual([
			'This     is    a',
			'justification   ',
			'example  of text',
		]);
	});

	it('should handle single word in the middle of sentence', () => {
		const strings = [
			'This',
			'is',
			'an',
			'justification',
			'example',
			'of',
			'text',
			'justification.',
		];
		const maxWidth = 16;
		expect(justifyText(strings, maxWidth)).toStrictEqual([
			'This    is    an',
			'justification   ',
			'example  of text',
			'justification.  ',
		]);
	});

	it('should not justify perfect fit sentence', () => {
		const strings = [
			'These',
			'are',
			'some',
			'justification',
			'examples',
			'of',
			'text',
			'justification.',
		];
		const maxWidth = 16;
		expect(justifyText(strings, maxWidth)).toStrictEqual([
			'These  are  some',
			'justification   ',
			'examples of text',
			'justification.  ',
		]);
	});

	it('should wrap larger word', () => {
		const strings = [
			'These',
			'are',
			'some',
			'justificationjustification',
			'examples',
			'of',
			'text',
			'justification.',
		];
		const maxWidth = 16;
		expect(justifyText(strings, maxWidth)).toStrictEqual([
			'These  are  some',
			'justificationjus',
			'tification      ',
			'examples of text',
			'justification.  ',
		]);
	});

	it('should justify larger width', () => {
		const strings = [
			'These',
			'are',
			'some',
			'justification',
			'examples',
			'of',
			'text',
			'justification.',
		];
		const maxWidth = 32;
		expect(justifyText(strings, maxWidth)).toStrictEqual([
			'These   are  some  justification',
			'examples  of text justification.',
		]);
	});
});
