import * as DTS from "./DateToString.JS";
import * as Calendar from "./Calendar.JS";
import * as Files from "./Files.JS";

let Today = new Date();
let WorkingFile = DTS.GetVerboseDate(Today);

function init(date){
	Calendar.Generate(date);
	document.querySelector("a#AboutButton").onclick = Files.about;
}

init(WorkingFile);
