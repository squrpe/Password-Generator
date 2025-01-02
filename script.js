// Lara Nicole - Updated 2025

// Query selectors for the inputs
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");
const passwordText = document.querySelector("#password");
const lengthInput = document.querySelector("#length");
const lowercaseInput = document.querySelector("#lowercase");
const uppercaseInput = document.querySelector("#uppercase");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");

// Characters sets
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+{}:?><;.,";
  
// Generate Password function
function generatePassword() {
  const length = parseInt(lengthInput.value, 10);
  const includeLowercase = lowercaseInput.checked;
  const includeUppercase = uppercaseInput.checked;
  const includeNumbers = numbersInput.checked;
  const includeSymbols = symbolsInput.checked;

  // Validate inputs
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return '';
  }
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
    alert("You must select at least one character type.");
    return '';
  }

  // Build the usable character set
  let usableCharacters = "";
  if (includeLowercase) usableCharacters += lower;
  if (includeUppercase) usableCharacters += upper;
  if (includeNumbers) usableCharacters += number;
  if (includeSymbols) usableCharacters += symbol;

  // Generate the password
  let password = "";
  for (let i = 0; i < length; i++) {
    password += usableCharacters[Math.floor(Math.random() * usableCharacters.length)];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  passwordText.value = password;
}

// Copy password to clipboard
function copyToClipboard() {
  if (passwordText.value) {
    navigator.clipboard.writeText(passwordText.value).then(() => {
      alert("Password copied to clipboard!");
    });
  } else {
    alert("No password to copy!");
  }
}

// Event listeners
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);
