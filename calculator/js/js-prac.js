/*Ask the user's name*/
var reply = prompt("What is your name?")

/*Take the user's name and say a greeting*/
var saySomething = function() {
  alert("Hi " + reply + "!");
};
saySomething();

/*Ask user for number1*/
var number1 = prompt("Enter a number:")

/*Ask user for number2*/
var number2 = prompt("Enter a another number:")

/*Subtract 2 numbers*/
var subtract = function(number1, number2) {
  return number1 - number2;
};

/*Display results*/
var showResults = function(whatToShow) {
  alert(whatToShow);
};
showResults("The result is " + subtract(number1, number2) + ".");

/*Ask user for number1*/
var number1 = prompt("Enter a number:")

/*Ask user for number2*/
var number2 = prompt("Enter a another number:")

/*Multiply 2 numbers*/
var multiply = function(number1, number2) {
  return number1 * number2;
};

showResults("The result is " + multiply(number1, number2) + ".");

/*Ask user for number1*/
var number1 = prompt("Enter a number:")

/*Ask user for number2*/
var number2 = prompt("Enter a another number:")

/*Ask user for number3*/
var number3 = prompt("Enter a another number:")

/*Multiply 3 numbers*/
var threeTimes = function(number1, number2, number3) {
  return number1 * number2 * number3;
};

showResults("The result is " + threeTimes(number1, number2, number3) + ".");

/*Ask user for number1*/
var number1 = prompt("Enter a number:")

/*Ask user for number2*/
var number2 = prompt("Enter a another number:")

/*Divide 2 numbers*/
var divide = function(number1, number2) {
  return number1 / number2;
};

showResults("The result is " + divide(number1, number2) + ".");

/*Ask user for number1*/
var number1 = prompt("Enter a number:")

/*Ask user for number2*/
var number2 = prompt("Enter a another number:")

/*Reminder after dividing 2 numbers*/
var reminder = function(number1, number2) {
  return number1 % number2;
};

showResults("The result is " + divide(number1, number2) + ".");

/*Ask user for name*/
var userName = prompt("What is your name?")

/*Ask user for age*/
var userAge = prompt("What is your age?")

/*Ask user for favourite food?*/
var userFavoriteFood = prompt("What is your favourite food?")

/*Display name, age and favorite food*/
var userInformation = function() {
  alert("Your name is " + userName + ". Your are " + userAge + ". You favorite food is " + userFavoriteFood + "! :)");
};
userInformation();
