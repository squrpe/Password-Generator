// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  var lengthChoice = window.prompt("How long do you want your password?");
  var lowerChoice = window.confirm("Do you want to include Lowercase Letters?");
  var upperChoice = window.confirm("Do you want to include Uppercase Letters?");
  var numChoice = window.confirm("Do you want to include Numbers?");
  var symChoice = window.confirm("Do you want to include Special Symbols?");

  var generatePassword = " ";

  var choiceArr = [{lowerChoice}, {upperChoice}, {numChoice}, {symChoice}];
  console.log("Arr: ", choiceArr);

  var trueArr = trueValues(choiceArr);
  console.log("Arr: ", trueArr);

  return "placeholder";
}

function trueValues(array) {

  console.log("Arr: ", array);

  var trueChoices;

  for (var i = 0; i < array.length; i++) { 
    if (array[i] === true) {
      //array.push(i)(array); ?
    }
  }

  return trueChoices;
}

