import { cornerHit } from './cornerHit';

describe('#cornerHit', () => {
	it('should hit the corner', () => {
		const hit = cornerHit({
			dimensions: [5, 5],
			initialCoordinates: [0, 0],
			screenSize: [100, 100],
		});
		expect(hit).toBe(true);
	});

	it('should hit the corner starting from (1,1)', () => {
		const hit = cornerHit({
			dimensions: [5, 5],
			initialCoordinates: [1, 1],
			screenSize: [100, 100],
		});
		expect(hit).toBe(true);
	});

	it('should not hit the corner', () => {
		const hit = cornerHit({
			dimensions: [5, 5],
			initialCoordinates: [45, 70],
			screenSize: [400, 200],
		});
		expect(hit).toBe(false);
	});

	it('should not hit the corner 2', () => {
		const hit = cornerHit({
			dimensions: [5, 5],
			initialCoordinates: [1, 1],
			screenSize: [99, 100],
		});
		expect(hit).toBe(false);
	});

	it('should not hit the corner 3', () => {
		const hit = cornerHit({
			dimensions: [5, 5],
			initialCoordinates: [1, 1],
			screenSize: [100, 99],
		});
		expect(hit).toBe(false);
	});

	it('should not hit the corner 4', () => {
		const hit = cornerHit({
			dimensions: [5, 5],
			initialCoordinates: [1, 1],
			screenSize: [100, 100.5],
		});
		expect(hit).toBe(false);
	});

	it('should not hit the corner 5', () => {
		const hit = cornerHit({
			dimensions: [5, 5],
			initialCoordinates: [1, 1],
			screenSize: [100.5, 99.5],
		});
		expect(hit).toBe(false);
	});

	it('should not hit the corner 6', () => {
		const hit = cornerHit({
			dimensions: [5, 5],
			initialCoordinates: [1, 1],
			screenSize: [99.5, 100.5],
		});
		expect(hit).toBe(false);
	});
});
