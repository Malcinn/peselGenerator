window.addEventListener("load", function() {
	console.log("Hello World!");
	var randomPesel = new RandomPesel();
	document.getElementById("pesel").innerHTML = randomPesel.getRandomPesel();
});

function MyMath() {
	/** 
	 Function return random number between min(inclusive) - max(inclusive)
	*/
	this.getRandomInt = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

function DateFormatter () {
	/**
	 This function returns last 2 characters form year.
	*/
	this.getYear = function(year) {
		var yearAsString = String(year);
		return yearAsString.substr(yearAsString.length-2, 2);
	}
	
	/**
	 This function returns month as String.
	*/
	this.getMonth = function(month) {
		var prefix = this.getPrefix(month);
		return prefix + String(month);
	}
	
	/**
	 This function returns day as String
	*/
	this.getDay = function(day) {
		var prefix = this.getPrefix(day);
		return prefix + String(day);
	}
	
	/**
	 This function returns "0" if passed parametr is less than 10
	*/
	this.getPrefix = function(number) {
		if (number < 10) {
			return String("0");
		}
		return String();
	}
	
}

function RandomDate() {
	
	/**
	 This method returns random year between 1800 - TODAY_YEAR
	*/
	this.getRandomYear = function() {
		var date = new Date();
		var minYear = 1800;
		var maxYear = date.getFullYear() -1;
		var myMath = new MyMath();
		return myMath.getRandomInt(minYear, maxYear);
  }
  
	/**
	 This method returns random month between 1 - 12
	*/
	this.getRandomMonth = function() {
		var minMonth = 1;
		var maxMonth = 12;
		var myMath = new MyMath();
		return myMath.getRandomInt(minMonth, maxMonth);
  }
	
	/**
	 This method returns random day depends on year and month passed as parameters.
	*/
	this.getRandomDay = function(year, month) {
		var d = new Date(year, month, 0);
	  return d.getDate();
	}
	
	/**
	 This function returs century value for year passed as parameter.
	*/
	this.getCenturyValue = function(year) {
		if (year >= 1800 && year <= 1899){
			return 80;
		} else if (year >= 2000 && year <=2099) {
			return 20;
    } else if (year >= 2100 && year <= 2199) {
			return 40;
		} else if (year >= 2200 && year <= 2299) {
			return 60;
		} else {
			return 0;
		}
  }
	
	/**
	 This method returns Whole random date Section as as String
	*/
	this.getRandomDateSection = function () {
		var dateFormatter = new DateFormatter();
		var year = this.getRandomYear();
		var yearAsString = dateFormatter.getYear(year);
		var month = this.getRandomMonth() + this.getCenturyValue(year);
		var monthAsString = dateFormatter.getMonth(month);
		var day = this.getRandomDay(year, month);
		var dayAsString = dateFormatter.getDay(day);
		return yearAsString + monthAsString + dayAsString;
	}
	
}

function SerialNumberSectionWithGender () {
	
	/**
	 This method returns serial number and Gender Section. 
	 Serial number is a number between 100 - 999 and gender 0 - 9.
	*/
	this.getRandomSerialNumberSectionWithGender = function () {
		var minGender = 0;
		var maxGender = 9;
		var myMath = new MyMath();
		var gender = myMath.getRandomInt(minGender, maxGender);
		var randomNumber = myMath.getRandomInt(100,999);
		return String(randomNumber) + String(gender);
	}
	
}

function ControlNumberSection () {
	
	/**
	 This method calculate and return control number for PESEL
	*/
	this.getControlNumberSection = function(peselWithoutControlNumber) {
		var numbers = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
		var length = 10;
		var sum = 0;
		for (i=0; i<numbers.length; i++) {
			sum += numbers[i] * Number(peselWithoutControlNumber[i]);
		}
		return sum % length;
	}
	
}

function RandomPesel() {
	
	/**
	 This method returns random pesel as a String.
	*/
	this.getRandomPesel = function() {
		var randomDate = new RandomDate();
		var serialNumberSectionWithGender = new SerialNumberSectionWithGender();
		var controlNumber = new ControlNumberSection();
		
		var dateSection = randomDate.getRandomDateSection();
		var serialNumberSection = serialNumberSectionWithGender.getRandomSerialNumberSectionWithGender();
		var controlNumberSection = controlNumber.getControlNumberSection(dateSection + serialNumberSection);
		return dateSection + serialNumberSection + controlNumberSection;
	}
	
}


function IDNumber() {
	
	this.numbers = [7, 3, 1, 7, 3, 1, 7, 3];
	this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	this.lettersValues = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
	
	this.getIDNumber = function() {
		var myMath = new MyMath();
		var randomLetterPosition = myMath.getRandomInt(0,26);
	}
	
}