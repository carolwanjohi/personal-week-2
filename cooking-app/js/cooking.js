/*Ask user for Weight in Pounds*/
var pounds = parseInt(prompt("Enter weight in ponuds: "));

/*kg = pounds * 0.45359237*/

/*Pounds to Kilogram*/
var poundsToKilograms = function(pounds) {
  return pounds * 0.45359237
};

/*Convert Pounds to Kilograms*/
var resultKilograms = poundsToKilograms(pounds).toFixed();

/*kg = grams * 1000*/
/*Convert Kilograms to Grams*/
var resultGrams = resultKilograms * 1000;

alert(resultKilograms + " kilograms and " + resultGrams + " grams");

/*Ask user for Volume in Gallons*/
var gallons = parseInt(prompt("Enter volume in Gallons: "));

/* l = imperial gallon * 4.54609*/

/*Gallons to Liters*/
var gallonsToLiters = function(gallons) {
  return gallons * 4.54609
};

/*Convert Gallons to Liters*/
var resultLiters = gallonsToLiters(gallons).toFixed();

/*l = ml * 1000*/
/*Convert Liters to Milliliters*/
var resultMilliliters = resultLiters * 1000;

alert(resultLiters + " liters and " + resultMilliliters + " milliliters.");
