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

  var countChoices = lowerChoice + upperChoice + numChoice + symChoice;

  var choiceArr = [{lowerChoice}, {upperChoice}, {numChoice}, {symChoice}].filter(item => Object.values(item)[0]);
  console.log("Arr: ", choiceArr);

  if(countChoices === 0) {
    return " ";
  }

  for (var i = 0; i < lengthChoice; i+=countChoices) {
    choiceArr.forEach(type => { })

  }

  
  return "placeholder";
}

//function trueValues(array) {

  //console.log("Arr: ", array);

  //var trueChoices;

  //for (const key in array) {
    //if (array.(key)) {
     //console.log(`${key}: ${array[key]}`);
    //}
  //}


  //for (var i = 0; i < array.length; i++) {
    //if (array[i] === true)

  //}

  //return trueChoices;


