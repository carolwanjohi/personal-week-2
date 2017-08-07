/*Ask user for height*/
var height = parseInt(prompt("Enter your height in meters:"));

/*Ask user for weight*/
var weight = parseInt(prompt("Enter your weight in kilograms:"));

/*Function to square the hieght*/
var heightSquared = function(height, height) {
  return height * height
};

/*Square the hieght*/
var resultHeightSquared = heightSquared(height, height);

/*Function to calculate BMI*/
var userBMI = function(weight, resultHeightSquared) {
  return weight / resultHeightSquared
};

/*Square the hieght*/
var resultBMI = userBMI(weight, resultHeightSquared);

/*Display results*/
alert("Your BMI is " + resultBMI + ".");
