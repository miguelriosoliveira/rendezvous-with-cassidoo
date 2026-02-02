import { describe, it, expect } from "vitest";
import { nearestPerfectMonths } from "./nearestPerfectMonths";

describe("nearestPerfectMonths", () => {
	it("should return the correct perfect months for 2025", () => {
		const result = nearestPerfectMonths(2025);
		// expect(result).toBe({ prev: "2021-02", next: "2026-02" });
		expect(result.prev).toBe("2021-02");
		expect(result.next).toBe("2026-02");
	});

	it("should return the correct perfect months for 2026", () => {
		const result = nearestPerfectMonths(2026);
		expect(result.prev).toBe("2026-02");
		expect(result.next).toBe("2027-02");
	});

	it("should handle year before any perfect month", () => {
		const result = nearestPerfectMonths(2020);
		expect(result.prev).toBe("2016-02");
		expect(result.next).toBe("2021-02");
	});

	it("should handle year exactly on a perfect month", () => {
		const result = nearestPerfectMonths(2021);
		expect(result.prev).toBe("2021-02");
		expect(result.next).toBe("2026-02");
	});

	it("should handle year in the middle of two perfect months", () => {
		const result = nearestPerfectMonths(2023);
		expect(result.prev).toBe("2021-02");
		expect(result.next).toBe("2026-02");
	});

	it("should handle year 2027", () => {
		const result = nearestPerfectMonths(2027);
		expect(result.prev).toBe("2027-02");
		expect(result.next).toBe("2032-02");
	});

	it("should handle early years", () => {
		const result = nearestPerfectMonths(1983);
		expect(result.prev).toBe("1982-02");
		expect(result.next).toBe("1987-02");
	});

	it("should handle large year numbers", () => {
		const result = nearestPerfectMonths(2500);
		expect(result.prev).toBe("2500-02");
		expect(result.next).toBe("2505-02");
	});
});
