import { verticalSlashes } from './verticalSlashes';

describe('testing verticalSlashes', () => {
	it('should draw slashes 1', async () => {
		const expected = `
\\
 \\
  \\
  /
 /
 \\
 /
 \\
  \\
`.trim();
		expect(verticalSlashes('\\\\\\//\\/\\\\')).toBe(expected);
	});

	it('should draw slashes 2', async () => {
		const expected = `
\\
 \\
  \\
   \\
	`.trim();
		expect(verticalSlashes('\\\\\\\\')).toBe(expected);
	});

	it('should draw slashes 3', async () => {
		const expected = `
\\
 \\
  \\
  /
 /
 \\
 /
 \\
  \\
   \\
    \\
     \\
      \\
      /
     /
    /
    \\
    /
    \\
     \\
`.trim();
		expect(verticalSlashes('\\\\\\//\\/\\\\\\\\\\\\///\\/\\\\')).toBe(expected);
	});
});
