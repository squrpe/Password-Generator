
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