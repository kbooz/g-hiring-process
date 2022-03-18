/**
 * Shortens a string to a given length.
 * if a backLength is provided, the string will be shortened to that length plus the backLength.
 *
 * example:
 * shorten("helloworld", 2) => "he...ld"
 * shorten("helloworld", 2, 3) => "he...rld"
 *
 * @param address
 * @param length amount of characters to show
 * @param backLength
 * @returns {string} short address
 */
export const shortenWalletAddress = (
	address: string,
	length: number = 8,
	backLength?: number
): string => {
	return (
		address.substring(0, length) +
		"..." +
		address.substring(address.length - (backLength ?? length))
	);
};
