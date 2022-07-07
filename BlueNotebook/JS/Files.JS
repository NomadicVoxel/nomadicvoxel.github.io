import * as Calendar from "./Calendar.JS";

export function load(title){
	Calendar.Generate(title);
}

export function about(){
	let AboutDialog = document.querySelector("dialog#about");
	AboutDialog.showModal();
}