import { readdirSync, readFileSync, writeFileSync, statSync, mkdirSync } from 'fs';
import { join } from 'path';

interface Question {
	id: string;
	number: number;
	name: string;
	year: number;
	title: string;
	description: string;
	example: string;
	issueLink: string;
	code: string;
	folderPath: string;
}

const SRC_DIR = join(process.cwd(), '..', 'src');
const OUTPUT_FILE = join(process.cwd(), 'src', 'data', 'questions.json');

function extractQuestionFromReadme(readmePath: string): Partial<Question> {
	const content = readFileSync(readmePath, 'utf-8');
	const lines = content.split('\n');

	// Extract title (first line after #)
	const titleLine = lines.find((line) => line.startsWith('# '));
	const title = titleLine ? titleLine.replace(/^# /, '').trim() : '';

	// Extract issue link
	const issueLinkMatch = content.match(/\[issue #(\d+) of rendezvous with cassidoo\]\((https?:\/\/[^\)]+)\)/);
	const issueNumber = issueLinkMatch ? parseInt(issueLinkMatch[1]) : 0;
	const issueLink = issueLinkMatch ? issueLinkMatch[2] : '';

	// Extract question description (text between "## The Question" and "Example:" or next ##)
	const questionStart = content.indexOf('## The Question');
	let description = '';
	let example = '';

	if (questionStart !== -1) {
		const afterQuestion = content.substring(questionStart + 15);
		const exampleStart = afterQuestion.indexOf('Example:');
		const nextSectionStart = afterQuestion.indexOf('## ', 1);

		if (exampleStart !== -1) {
			description = afterQuestion
				.substring(0, exampleStart)
				.replace(/\*\*/g, '')
				.trim();
			const exampleEnd = nextSectionStart !== -1 ? nextSectionStart : afterQuestion.length;
			example = afterQuestion.substring(exampleStart, exampleEnd).trim();
		} else if (nextSectionStart !== -1) {
			description = afterQuestion.substring(0, nextSectionStart).trim().replace(/\*\*/g, '');
		} else {
			description = afterQuestion.trim().replace(/\*\*/g, '');
		}
	}

	return {
		title,
		description,
		example,
		issueLink,
		number: issueNumber,
	};
}

function getQuestions(): Question[] {
	const questions: Question[] = [];
	const years = readdirSync(SRC_DIR).filter((name) => {
		const path = join(SRC_DIR, name);
		return statSync(path).isDirectory() && /^\d{4}$/.test(name);
	});

	for (const year of years) {
		const yearPath = join(SRC_DIR, year);
		const questionFolders = readdirSync(yearPath).filter((name) => {
			const path = join(yearPath, name);
			return statSync(path).isDirectory();
		});

		for (const folder of questionFolders) {
			const folderPath = join(yearPath, folder);
			const match = folder.match(/^(\d+)-(.+)$/);

			if (!match) continue;

			const [, numberStr, name] = match;
			const number = parseInt(numberStr);

			// Read README
			const readmePath = join(folderPath, 'README.md');
			let questionData: Partial<Question> = {};
			try {
				questionData = extractQuestionFromReadme(readmePath);
			} catch (e) {
				console.error(`Error reading ${readmePath}:`, e);
			}

			// Read TypeScript source code
			// Try exact name first, then try case variations
			const possibleFiles = [
				join(folderPath, `${name}.ts`),
				// Try to find any .ts file that's not a test
				...readdirSync(folderPath)
					.filter((f) => f.endsWith('.ts') && !f.endsWith('.test.ts'))
					.map((f) => join(folderPath, f)),
			];

			let code = '';
			for (const tsFile of possibleFiles) {
				try {
					code = readFileSync(tsFile, 'utf-8');
					break;
				} catch (e) {
					// Try next file
				}
			}

			if (!code) {
				console.error(`No TypeScript source found in ${folderPath}`);
			}

			questions.push({
				id: `${year}-${number}`,
				number,
				name,
				year: parseInt(year),
				title: questionData.title || name,
				description: questionData.description || '',
				example: questionData.example || '',
				issueLink: questionData.issueLink || '',
				code,
				folderPath: `src/${year}/${folder}`,
			});
		}
	}

	return questions.sort((a, b) => a.number - b.number);
}

// Main execution
const questions = getQuestions();
console.log(`Found ${questions.length} questions`);

// Ensure data directory exists
const dataDir = join(process.cwd(), 'src', 'data');
try {
	readdirSync(dataDir);
} catch {
	mkdirSync(dataDir, { recursive: true });
}

writeFileSync(OUTPUT_FILE, JSON.stringify(questions, null, 2));
console.log(`Generated ${OUTPUT_FILE}`);
