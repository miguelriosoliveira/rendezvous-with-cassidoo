/*
Write a function that takes a string of slashes (\ and /) and returns all of those slashes drawn
downwards in a line connecting them.

Example:

$ verticalSlashes('\\\//\/\\')
\
 \
  \
  /
 /
 \
 /
 \
  \
$ verticalSlashes('\\\\')
\
 \
  \
   \
*/

const BACKSLASH = '\\';
const FORWARD_SLASH = '/';

type Slash = typeof BACKSLASH | typeof FORWARD_SLASH;

interface LeftPadInfo {
	slash: Slash;
	leftPad: number;
}

export function verticalSlashes(slashes: string): string {
	const leftPadInfos: LeftPadInfo[] = [];

	const slashArray = slashes.split('') as Slash[];
	slashArray.forEach((slash, i) => {
		const { slash: prevSlash, leftPad: prevLeftPad } = leftPadInfos[i - 1] || {
			slash: null,
			leftPad: 0,
		};

		let leftPad = prevLeftPad;
		if (prevSlash === BACKSLASH) {
			leftPad += Number(slash === BACKSLASH);
		} else {
			leftPad -= Number(slash === FORWARD_SLASH);
		}

		leftPadInfos.push({ slash, leftPad });
	});

	return leftPadInfos
		.map(({ slash, leftPad }) => slash.padStart(leftPad + 1)) // "+1" because the left pad count doesn't include the slash itself
		.join('\n');
}
