import { describe, expect, it } from "vitest";
import { resolvePath } from "./resolvePath";

describe("resolvePath", () => {
	it("resolves a multi-step symlink chain to the final real path", () => {
		const fs = {
			"/a": "/b",
			"/b": "/c",
			"/c": null,
		};

		expect(resolvePath(fs, "/a")).toBe("/c");
	});

	it("returns the same path when it already points to a real destination", () => {
		const fs = {
			"/real": null,
			"/alias": "/real",
		};

		expect(resolvePath(fs, "/real")).toBe("/real");
	});

	it("resolves a direct alias to a real destination", () => {
		const fs = {
			"/real": null,
			"/alias": "/real",
		};

		expect(resolvePath(fs, "/alias")).toBe("/real");
	});

	it("returns null when the symlink chain has a cycle", () => {
		const fs = {
			"/loop1": "/loop2",
			"/loop2": "/loop1",
		};

		expect(resolvePath(fs, "/loop1")).toBeNull();
		expect(resolvePath(fs, "/loop2")).toBeNull();
	});

	it("returns null when starting path is missing", () => {
		const fs = {
			"/real": null,
		};

		expect(resolvePath(fs, "/missing")).toBeNull();
	});

	it("returns null when a chain points to a missing path", () => {
		const fs = {
			"/a": "/b",
			"/b": "/missing",
			"/real": null,
		};

		expect(resolvePath(fs, "/a")).toBeNull();
	});
});
