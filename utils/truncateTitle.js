export const truncateTitle = (str) => {
	if (str.length >= 45) {
		return str.substring(0, 45) + '...';
	}
	return str;
};