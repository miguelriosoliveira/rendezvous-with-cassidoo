import { truncate } from './truncate';

describe('#truncate', () => {
	it('should truncate words to length of 3', () => {
		const length = 3;
		expect(truncate('never gonna give you up', length)).toBe('nev gon giv you up');
	});

	it('should truncate words ignoring other symbols', () => {
		const length = 3;
		expect(truncate('*hello* darkness, my ~old_friend', length)).toBe('*hel* dar, my ~old_fri');
		expect(truncate('*olá* escuridão, minha ~velha_amiga', length)).toBe('*olá* esc, min ~vel_ami');
	});

	it('should truncate words to length of 0', () => {
		const length = 0;
		expect(truncate('never gonna give you up', length)).toBe('    ');
		expect(truncate('*hello* darkness, my ~old_friend', length)).toBe('** ,  ~_');
		expect(truncate('*olá* escuridão, minha ~velha_amiga', length)).toBe('** ,  ~_');
	});

	it('should return the same phrase when no words match', () => {
		const length = 3;
		expect(truncate('** ,  ~_', length)).toBe('** ,  ~_');
		expect(truncate('[ ] ^ \\ × ÷', length)).toBe('[ ] ^ \\ × ÷');
	});
});
