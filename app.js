window.addEventListener("load", function() {
	console.log("Hello World!");
	var year = getRandomYear();
	var month = getRandomMonth();
	//var day = getRandomDay(year, month);
	var day = new RandomDate().getRandomDay(year,month);
	document.getElementById("yearLabel").innerHTML = year;
	document.getElementById("monthLabel").innerHTML = month;
	document.getElementById("dayLabel").innerHTML = day;
	
});

function RandomDate() {
	
	this.currentRandomYear = null;
	this.currentRandomMonth = null;
	this.currentRandomDay = null;
	
	this.getRandomYear = function (minYear, maxYear) {
		this.currentRandomYear = getRandomInt(minYear, maxYear);
		return this.currentRandomYear;
	}
  
	this.getRandomMonth = function(minMonth, maxMonth) {
		this.currentRandomMonth = getRandomInt(minMonth, maxMonth);
		return this.currentRandomMonth;
	}
	
	this.getRandomDay = function(year, month) {
		var d = new Date(year, month, 0);
	  this.currentRandomDay = d.getDate();
		return this.currentRandomDay;
	}
}

/** Function return random number between min(inclusive) - max(inclusive) */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomYear() {
	var date = new Date();
	var minYear = 1800;
	var maxYear = date.getFullYear();
	return getRandomInt(minYear, maxYear);
}

function getRandomMonth() {
	var minMonth = 1;
	var maxMonth = 12;
	return getRandomInt(minMonth, maxMonth);
}

function getRandomDay(year, month) {
	var d = new Date(year, month, 0);
	return d.getDate();
}

function getCenturyValue(year) {
	
}

function getRandomDateSection() {
	var year = getRandomYear();
	var month = getRandomMonth() + getCenturyValue(year);
	var day = getRandomDay(year, month);
	return year + month + day;
}

function getRandomSerialNumberSectionWithGender() {

}

function getControlNumberSection(dateSection, serialNumberSection) {

}

function getRandomPesel() {
	var dateSection = getRandomDateSection();
	var serialNumberSection = getRandomSerialNumberSectionWithGender();
	return dateSection + serialNumberSection
			+ getControlNumberSectionCon(dateSection, serialNumberSection);
}