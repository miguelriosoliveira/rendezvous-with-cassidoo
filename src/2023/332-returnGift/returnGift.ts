/*
You have some gifts you want to return.
Gifts bought in December have a 90-day return window, and all other gifts have a 30-day return window.
Given a gift's buy date, write a function that prints the last day you can return the gift.
You can choose how dates should be formatted!

Example:

> returnGift('Dec 25, 2023')
> "Mar 23, 2024"
*/

export function returnGift(boughtDateStr: string): string {
	// date string validation
	if (Number.isNaN(Date.parse(boughtDateStr))) {
		throw new Error('Invalid date');
	}

	const boughtDate = new Date(boughtDateStr);
	const returnDate = new Date(boughtDate);

	// 11 is December, since 0 is January
	const daysToAdd = boughtDate.getMonth() === 11 ? 90 : 30;
	returnDate.setDate(returnDate.getDate() + daysToAdd);

	return returnDate.toLocaleDateString('en', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	});
}
