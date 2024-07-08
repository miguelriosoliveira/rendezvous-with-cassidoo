import { canPlantFlowers } from './canPlantFlowers';

describe('#canPlantFlowers', () => {
	it('should return true when there is space to plant 1 flower between existing flowers', () => {
		expect(canPlantFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
	});

	it('should return false when there is not enough space to plant 2 flowers between existing flowers', () => {
		expect(canPlantFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
	});

	it('should return true when there is enough space to plant 3 flowers in an empty flowerbed', () => {
		expect(canPlantFlowers([0, 0, 0, 0, 0], 3)).toBe(true);
	});

	it('should return false when there is no space to plant any flowers between existing flowers', () => {
		expect(canPlantFlowers([1, 0, 1, 0, 1], 1)).toBe(false);
	});

	it('should return true when there is enough space to plant 1 flower at the start', () => {
		expect(canPlantFlowers([0, 0, 1, 0, 0], 1)).toBe(true);
	});

	it('should return true when there is enough space to plant 2 flowers at the start and end', () => {
		expect(canPlantFlowers([0, 0, 1, 0, 0], 2)).toBe(true);
	});

	it('should return true when there is enough space to plant 2 flowers at the end', () => {
		expect(canPlantFlowers([1, 0, 0, 0, 0], 2)).toBe(true);
	});

	it('should return false when the flowerbed is full and no flowers can be planted', () => {
		expect(canPlantFlowers([1, 1, 1, 1, 1], 1)).toBe(false);
	});
});
