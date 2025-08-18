import { createLaundryItem } from './createLaundryItem';

describe('#createLaundryItem', () => {
	const expectedCycles = ['soak', 'wash', 'rinse', 'spin', 'dry'] as const;

	it('progresses through the expected cycle order then returns done', () => {
		const item = createLaundryItem();

		for (const stage of expectedCycles) {
			expect(item.nextCycle()).toBe(stage);
		}

		expect(item.nextCycle()).toBe('done');
		expect(item.nextCycle()).toBe('done');
	});

	it('returns done repeatedly after finishing all cycles', () => {
		const item = createLaundryItem();

		// Exhaust all cycles
		expectedCycles.forEach(() => item.nextCycle());

		// Now it should always be "done"
		for (let i = 0; i < 20; i++) {
			expect(item.nextCycle()).toBe('done');
		}
	});

	it('maintains independent state across multiple items', () => {
		const a = createLaundryItem();
		const b = createLaundryItem();

		expect(a.nextCycle()).toBe('soak');
		expect(b.nextCycle()).toBe('soak');

		expect(a.nextCycle()).toBe('wash');
		expect(b.nextCycle()).toBe('wash');

		// Advance a to completion
		expect(a.nextCycle()).toBe('rinse');
		expect(a.nextCycle()).toBe('spin');
		expect(a.nextCycle()).toBe('dry');
		expect(a.nextCycle()).toBe('done');

		// b should still be mid-cycle independently
		expect(b.nextCycle()).toBe('rinse');
		expect(b.nextCycle()).toBe('spin');
		expect(b.nextCycle()).toBe('dry');
		expect(b.nextCycle()).toBe('done');
	});

	it('works when nextCycle is destructured from the object', () => {
		const item = createLaundryItem();
		const next = item.nextCycle;

		expect(next()).toBe('soak');
		expect(next()).toBe('wash');
		// Interleave calls between destructured and original method
		expect(item.nextCycle()).toBe('rinse');
		expect(next()).toBe('spin');
		expect(item.nextCycle()).toBe('dry');
		expect(next()).toBe('done');
		expect(item.nextCycle()).toBe('done');
	});

	it('destructured nextCycle from different items keeps separate state', () => {
		const nextA = createLaundryItem().nextCycle;
		const nextB = createLaundryItem().nextCycle;

		expect(nextA()).toBe('soak');
		expect(nextB()).toBe('soak');
		expect(nextA()).toBe('wash');
		expect(nextB()).toBe('wash');

		// Finish A
		expect(nextA()).toBe('rinse');
		expect(nextA()).toBe('spin');
		expect(nextA()).toBe('dry');
		expect(nextA()).toBe('done');

		// B still mid-cycle
		expect(nextB()).toBe('rinse');
		expect(nextB()).toBe('spin');
		expect(nextB()).toBe('dry');
		expect(nextB()).toBe('done');
	});

	it('after N + k calls, where N is number of cycles, returns done', () => {
		const item = createLaundryItem();
		const totalCalls = expectedCycles.length + 50;

		let last: string | undefined;
		for (let i = 0; i < totalCalls; i++) {
			last = item.nextCycle();
		}

		expect(last).toBe('done');
	});
});
