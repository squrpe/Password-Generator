// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  generatePassword();
})

function generatePassword() {
  
  var lengthChoice = window.prompt("How long do you want your password?");
  var lowerChoice = window.confirm("Do you want to include Lowercase Letters?");
  var upperChoice = window.confirm("Do you want to include Uppercase Letters?");
  var numChoice = window.confirm("Do you want to include Numbers?");
  var symChoice = window.confirm("Do you want to include Special Symbols?");

  

}


function generateLower() {
  var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  var randomLower = alphabetLower[Math.floor(Math.random() * alphabetLower.length)];

  return randomLower;
}

function generateUpper () {
  var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randomUpper = alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];

  return randomUpper;
}

function generateNum () {
  var numbers = "1234567890";
  var randomNum = numbers[Math.floor(Math.random() * numbers.length)];

  return randomNum;
}

function generateSym() {
  var symbols = "!@#$%^&*(){}[]='<>/,.~|"
  var randomSym = symbols[Math.floor(Math.random() * symbols.length)];

  return randomSym;
}