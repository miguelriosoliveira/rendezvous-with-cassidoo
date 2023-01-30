import { formatTable } from './formatTable';

describe('testing formatTable', () => {
	it('should format table', () => {
		const table = `
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |
`.trim();
		const formattedTable = formatTable(table);
		const expectedTable = `
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
`.trim();
		expect(formattedTable).toBe(expectedTable);
	});

	it('should format table 2', () => {
		const table = `
| Syntax | Description | Test Text |
| --- | --- | --- |
| Header | Title | Here's this |
| Paragraph | Text | And more |
`.trim();
		const formattedTable = formatTable(table);
		const expectedTable = `
| Syntax    | Description | Test Text   |
| --------- | ----------- | ----------- |
| Header    | Title       | Here's this |
| Paragraph | Text        | And more    |
`.trim();
		expect(formattedTable).toBe(expectedTable);
	});

	it('should not format already-formatted table', () => {
		const table = `
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
`.trim();
		const formattedTable = formatTable(table);
		const expectedTable = `
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
`.trim();
		expect(formattedTable).toBe(expectedTable);
	});
});
