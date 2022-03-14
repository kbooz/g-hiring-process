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
