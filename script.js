//Starting values for universal variables
var numberOfCharacters = 0;
var specialCharsAllowed = false;
var numbersAllowed = false;
var lowerCaseAllowed = false;
var upperCaseAllowed = false;

function askAllTheQuestions(){
  //resetting my universal variables
  numberOfCharacters = 0;
  specialCharsAllowed = false;
  numbersAllowed = false;
  lowerCaseAllowed = false;
  upperCaseAllowed = false;

  //Identifying the number of characters the user would like to use
  var askNumberofCharacters = window.prompt("How many characters do you want in your password? (8-128)");
  
  numberOfCharacters = parseInt(askNumberofCharacters);
  console.log(numberOfCharacters);

 //Assuring that the password is between 8-128 character, that the user did not click cancel or enter a string.
  if( numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)){
    alert("You MUST enter a value between 8 and 128");
    return; 
  } else if (askNumberofCharacters == "" || askNumberofCharacters == null){
    return;
  } else {
      numberOfCharacters = parseInt(askNumberofCharacters);
  console.log(numberOfCharacters);
  }


  //Asking whether the user would like to add special characters to their password
  specialCharsAllowed = window.confirm ("Would you like to include Special Charaters in your password? Click 'Ok' for yes and 'Cancel' for no.");
  console.log(specialCharsAllowed);

  //Asking whether the user would like to add numbers to their password
  numbersAllowed = window.confirm("Would you like to include Numbers in your password? Click 'Ok' for yes and 'Cancel' for no.");
  console.log(numbersAllowed);

  // Asking whether the user would like to add lower case letters to their password
  lowerCaseAllowed = window.confirm("Would you like to include lower case letters in your password? Click 'Ok' for yes and 'Cancel' for no.");
  console.log(lowerCaseAllowed);

  // Asking whether the user would like to add upper case letters to their password
  upperCaseAllowed = window.confirm("Would you like to include UPPER case letters in your password? Click 'Ok' for yes and 'Cancel' for no.");
  console.log(upperCaseAllowed);

  //Assuring the user selected at least 1 type of character, else they return to the beginning.
  if ( numbersAllowed !== true && specialCharsAllowed !== true && lowerCaseAllowed !== true && upperCaseAllowed !== true ){
    alert("You need to select at least one type of character. Try again");
    return;
  }
}

  // Functions for getting the types of characters the user would like
function getSpecChar () {
  var symbols= ""
    if (specialCharsAllowed) {
      symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    return symbols;
}

function getNumbers () {
  var numbers = ""
    if (numbersAllowed) {
      numbers = "1234567890";
      }
    return numbers;
}

function getLowerCase () {
  var lc = "";
    if (lowerCaseAllowed) {
      lc = "abcdefghijklmnopqrstuvwxyz";
      }
    return lc;
}

function getUpperCase () {
  var uc = "";
    if (upperCaseAllowed) {
      uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
    return uc;
}

//Function for getting a string of all characters the user selected.
function characterSet(){
  var characters= (getSpecChar() + getNumbers() + getLowerCase() + getUpperCase());
  return characters;
} 

var generateBtn = document.querySelector("#generate");

// Generating the password for the selected length and characters. 
function generatePassword() {
  askAllTheQuestions();

  var result = "";
  var allCharacters = characterSet();

  for ( var i=0; i<numberOfCharacters; i++ ) {
    result += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length))
    console.log(result)
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
