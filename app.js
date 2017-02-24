window.addEventListener("load", function() {
  console.log("Hello World!");
});

/** Function return random number between min(inclusive) - max(inclusive) */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max -min)) + min;
}

function getRandomYear() {
  var minYear = 1800;
  var maxYear = 2299;
  return getRandomInt(minYear, maxYear);
}

function getRandomMonth() {
  var minMonth = 1;
  var maxMonth = 12;
  return getRandomInt(minMonth, maxMonth);
}
var randomY = getRandomYear();


function getRandomDateSection() {
  var year = getRandomYear();
  var month = getRandomMonth() + getCenturyValue(year);
  var day = getRandomDay(year);
  return year + month + day;
}

function getRandomSerialNumberSectionWithGender() {
  
}

function getControlNumberSection (dateSection, serialNumberSection) {
  
}

function getRandomPesel() {
  var dateSection = getRandomDateSection();
  var serialNumberSection = getRandomSerialNumberSectionWithGender();
  return dateSection + serialNumberSection + getControlNumberSectionCon(dateSection, serialNumberSection);
}