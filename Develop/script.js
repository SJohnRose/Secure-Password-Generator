// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabets = "abcdefghijklmnopqrstuvwxyz";
var alphabetsUpper = alphabets.toUpperCase();
var numbers = "0123456789";
var specialChars = "@!#$%^&*";

// Generate a strong password
function generatePassword() {
  var password = "";
  var passwordLength = prompt("How many characters?");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid length!")
  }
  var lowerChoice = confirm("Do you need lowercase letters?");
  var upperChoice = confirm("Do you need uppercase letters?");
  var numberChoice = confirm("Do you need numbers?");
  var specialChoice = confirm("Do you need special characters?");

  // Generate list of characters based on user choice of criteria
  var passwordChars = "";

  if(lowerChoice) {
    passwordChars = alphabets;
  }

  if(upperChoice) {
    passwordChars = passwordChars + alphabets.toUpperCase();
  }

  if(numberChoice) {
    passwordChars = passwordChars + numbers;
  }

  if(specialChoice) {
    passwordChars = passwordChars + specialChars;
  }

  for (var i=1; i<=passwordLength; i++) {
    var randomGen = Math.floor(Math.random()*500)%passwordChars.length;
    password = password + passwordChars.charAt(randomGen)
  }
  return password;  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
