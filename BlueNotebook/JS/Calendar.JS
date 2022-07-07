import * as DTS from "./DateToString.JS";
import * as Files from "./Files.JS";

export function Generate(date) {
	// Convert input to date object, in case it wasn't one...
	let WorkingDate = new Date(date);
	let Today = new Date();

	// Display working date on page.
	document.querySelector("#WorkingDate").innerText = DTS.GetVerboseDate(WorkingDate);

	// Blank the calendar
	const CalendarTable = document.querySelector("#calendar tbody");
	CalendarTable.innerHTML = "";

	// Find the starting date. The first day of the week before the start of the month.
	let DateIndex = new Date(WorkingDate); 
	DateIndex.setDate(1);
	DateIndex.setDate( 1 - (7 + DateIndex.getDay()) );
	console.log(DTS.GetVerboseDate(DateIndex));
	
	// Before starting the loop to populate the calendar, we'll be tracking which month with this tag. (CSS needs this.)
	let WhichMonth = "LastMonth";
	for (let WeekCounter = 0; WeekCounter < 7; WeekCounter++){
		let row = document.createElement("tr");
		for (let DayCounter = 0; DayCounter < 7; DayCounter++){
			// Create cell
			let cell = document.createElement('td');
			cell.innerText = DateIndex.getDate();
			cell.dataset.datetime = DTS.GetVerboseDate(DateIndex);
			// label this month.
			if(DateIndex.getDate()==1){
				if(WhichMonth == "LastMonth") { 
					WhichMonth = "ThisMonth";
				} else{
					WhichMonth = "NextMonth";
				}
			}
			cell.classList.add(WhichMonth);
			// Label today and WorkingDate
			if (DTS.GetVerboseDate(DateIndex) == DTS.GetVerboseDate(Today)){
				cell.classList.add("Today");
			}
			if (DTS.GetVerboseDate(DateIndex) == DTS.GetVerboseDate(WorkingDate)){
				cell.classList.add("Active");
			}

			// Make PickDate button
			cell.onclick = (event) => PickDate(event.target.dataset.datetime);
			row.appendChild(cell);
			// increment date
			DateIndex.setDate(DateIndex.getDate() +1);
		}
		CalendarTable.appendChild(row);
	}
}

export function PickDate(Date){
	Files.load(Date);
}
