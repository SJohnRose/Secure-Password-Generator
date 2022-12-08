// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabets = "abcdefghijklmnopqrstuvwxyz";
var alphabetsUpper = alphabets.toUpperCase();
var numbers = "0123456789";
var specialChars = "@!#$%^&*";

// Main function
function generatePassword() {
  var password = "";
  var passwordLength = prompt("How many characters?");
  
  // Check if password length is between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid length!")
    return ("Click Generate Password again");
  }
  var lowerChoice = confirm("Do you need lowercase letters?");
  var upperChoice = confirm("Do you need uppercase letters?");
  var numberChoice = confirm("Do you need numbers?");
  var specialChoice = confirm("Do you need special characters?");

 // Check if at least one criteria is selected
  if (lowerChoice || upperChoice || numberChoice || specialChoice) {
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
  // Redirect user to main page if no criteria is selected
  else {
    window.alert("At least one criteria must be selected!");
    return ("Click Generate Password again");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
