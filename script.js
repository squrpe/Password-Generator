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

  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var symbol = "~!@#$%^&*()_+{}:?><;.,";

  var usableCharacters = " ";
  var password = " ";
  
  var lengthChoice = 0;
  lengthChoice = window.prompt("How long do you want your password? (Between 8 and 128)");

  if (lengthChoice >= 8 && lengthChoice <= 128) {
    console.log(lengthChoice);
    } else {
    alert("Please be sure your response is a number between 8 and 128.")
    return ' ';
  }

  var lowerChoice = window.confirm("Do you want to include Lowercase Letters?");
  if (lowerChoice) {
    usableCharacters += lower;
    console.log(usableCharacters);
  }

  var upperChoice = window.confirm("Do you want to include Uppercase Letters?");
  if (upperChoice) {
    usableCharacters += upper;
    console.log(usableCharacters);
  }

  var numChoice = window.confirm("Do you want to include Numbers?");
  if (numChoice) {
    usableCharacters += number;
    console.log(usableCharacters);
  }

  var symChoice = window.confirm("Do you want to include Special Symbols?");
  if (symChoice) {
    usableCharacters += symbol;
    console.log(usableCharacters);
  }

  if (!lowerChoice && !upperChoice && !numChoice && !symChoice){
    alert("You must include at least one set of characters.")
    return ' ';
    }

  for (var i = 0; i < lengthChoice; i++) {

    password += usableCharacters[Math.floor(Math.random() * usableCharacters.length)];

  };
  
  return password;

}

