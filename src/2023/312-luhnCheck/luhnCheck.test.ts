import { luhnCheck } from './luhnCheck';

describe('#luhnCheck', () => {
	it('should return { isValid: true, brand: "Mastercard" } for a valid Mastercard number', () => {
		expect(luhnCheck(5555555555554444)).toStrictEqual({ isValid: true, brand: 'Mastercard' });
	});

	it('should return { isValid: true, brand: "Visa" } for a valid Visa number', () => {
		expect(luhnCheck(4111111111111111)).toStrictEqual({ isValid: true, brand: 'Visa' });
	});

	it('should return { isValid: true, brand: "American Express" } for a valid American Express number', () => {
		expect(luhnCheck(378282246310005)).toStrictEqual({ isValid: true, brand: 'American Express' });
	});

	it('should return { isValid: true, brand: "Unknown" } for a valid but unknown number', () => {
		expect(luhnCheck(79927398713)).toStrictEqual({ isValid: true, brand: 'Unknown' });
	});

	it('should return { isValid: false, brand: "Unknown" } for invalid credit card numbers', () => {
		expect(luhnCheck(123456789)).toStrictEqual({ isValid: false, brand: 'Unknown' });
		expect(luhnCheck(1234567890123456)).toStrictEqual({ isValid: false, brand: 'Unknown' });
		expect(luhnCheck(8876543210987654)).toStrictEqual({ isValid: false, brand: 'Unknown' });
	});
});
