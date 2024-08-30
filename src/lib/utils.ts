/**
 * Normalize a string by removing accents and converting it to lowercase.
 * @param str The string to normalize.
 * @returns The string without accents and in lowercase.
 **/
export const normalizeString = (str: string): string => {
	return str
		.normalize("NFD")
		.replace(/\p{Diacritic}/gu, "")
		.toLowerCase();
};
