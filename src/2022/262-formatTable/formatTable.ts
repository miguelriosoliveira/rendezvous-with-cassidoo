/*
**Given a string that represents a markdown table, return a formatted markdown table.**
A formatted markdown table means that the width of each column is the width of the longest cell in the column.

Example:
```
Input:
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |

Output:
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```
*/

export function formatTable(table: string): string {
	// each row is represented by the text between the pipes
	const rows = table.split('\n').map(row => row.slice(2, -2));

	// get the width of each column
	const cellWidths = rows.map(row => {
		const cells = row.split(' | ');
		return cells.map(cell => cell.length);
	});

	// get the max cell length for each column
	const maxColWidths = cellWidths.reduce(
		(acc, rowCellLengths) => acc.map((max, index) => Math.max(max, rowCellLengths[index])),
		cellWidths[0],
	);

	// format the table
	const formattedTable = rows
		.map((row, rowIndex) => {
			const cells = row.split(' | ');
			const paddedCells = cells.map((cell, colIndex) => {
				const fillChar = rowIndex === 1 ? '-' : ' '; // fill with hyphens for header row and spaces for other rows
				return cell.padEnd(maxColWidths[colIndex], fillChar);
			});
			return `| ${paddedCells.join(' | ')} |`;
		})
		.join('\n');

	return formattedTable;
}
