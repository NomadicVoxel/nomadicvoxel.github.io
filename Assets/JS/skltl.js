// skltl: A skeletal framework by NomadicVoxel. Still in planning phase.

// D.O.M. tools
function Find(query) { return document.querySelector(query); }
function FindAll(query) { return document.querySelectorAll(query); }

// Time and date stuff
function FullDate(DateVar) { return DateVar.getFullYear() + "-" + (DateVar.getMonth() + 1) + "-" + DateVar.getDate(); }
function VerboseDate(date) { return (Weekday(date) + ", " + Month(date) + " " + date.getDate() + ", " + date.getFullYear()); }
function Weekday(date) {
	var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return Days[date.getDay()];
}
function Month(DateVar) {
	var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return Months[DateVar.getMonth()];
}
function RoundDate(date){
	date.setUTCHours(0);
	date.setUTCMinutes(0);
	date.setUTCSeconds(0);
	date.setUTCMilliseconds(0);
	return new Date(date);
}

// Files and Storage
function Download(Content,Title,Format){
	var file = window.URL.createObjectURL(new Blob(Content,Format));
	var anchor = document.createElement("a");
	anchor.href=file;
	anchor.download=Title;
	anchor.click();
	window.URL.revokeObjectURL(file);
	document.removeChild(anchor);
}