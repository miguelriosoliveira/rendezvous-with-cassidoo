/*
Given a set of letter grades, output the GPA (grade point average) of those grades.

Key and examples:

A = 4 grade points
A- = 3.7 grade points
B+ = 3.3 grade points
B = 3 grade points
B- = 2.7 grade points
C+ = 2.3 grade points
C = 2 grade points
C- = 1.7 grade points
D+ = 1.3 grade points
D = 1 grade point
D- = 0.7 grade points
F = 0 grade points

$ calculateGPA(['A'])
$ 4

$ calculateGPA(['F', 'F', 'F'])
$ 0

$ calculateGPA(['A', 'A-', 'B+', 'B', 'B-'])
$ 3.3

$ calculateGPA(['A', 'B+', 'C-', 'A'])
$ 3.3
*/

const GRADE_MAP = {
	A: 4,
	'A-': 3.7,
	'B+': 3.3,
	B: 3,
	'B-': 2.7,
	'C+': 2.3,
	C: 2,
	'C-': 1.7,
	'D+': 1.3,
	D: 1,
	'D-': 0.7,
	F: 0,
} as const;

type Grade = keyof typeof GRADE_MAP;

export function calculateGPA(grades: Grade[]): number {
	const gradeSum = grades.reduce((acc, grade) => acc + GRADE_MAP[grade], 0);
	const roundedTo1Decimal = (gradeSum / grades.length).toFixed(1);
	return Number(roundedTo1Decimal);
}
