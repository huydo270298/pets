export const fomartCurrency = (value: number) => {
	const result = new Intl.NumberFormat().format(value);
	return String(result).replaceAll(',', '.');
};

export const fomartAge = (value: string) => {
	const ageDifMs = Date.now() - new Date(value).getTime();
	const ageDate = new Date(ageDifMs); // miliseconds from epoch
	const year = ageDate.getUTCFullYear() - 1970;
	const month = ageDate.getUTCMonth() + 1;

	if (year === 0) {
		if (month <= 9) {
			return `0${month} month`;
		}
		return `${month} months`;
	}
	if (month === 0) {
		if (year <= 9) {
			return `${year} years`;
		}
	}

	return `${year} years ${month} months`;
};

export const upperCaseFirst = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
