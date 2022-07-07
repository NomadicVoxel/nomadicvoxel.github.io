export function GetNamedMonth(date) {
	return [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	][date.getMonth()];
}

export function GetNamedDay(date) {
	return [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	][date.getDay()];
}

export function GetMDY(date) {
	return GetNamedMonth(date) + " " + date.getDate() + ", " + date.getFullYear();
}

export function GetVerboseDate(date) {
	return GetNamedDay(date) + ", " + GetMDY(date);
}