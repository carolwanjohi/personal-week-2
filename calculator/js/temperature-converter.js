/*Ask user for Temperature in Celcius*/
var celcius = parseInt(prompt("Enter temperature in Celcius: "));

/*0 Celsius === 32 Fahrenheit*/

/*Celcius to Fahrenheit*/
var celciusToFahrenheit = function(celcius) {
  return celcius * 9 / 5 + 32
};

/*Convert to Fahrenheit*/
var resultCelcius = celciusToFahrenheit(celcius).toFixed(2);

/*Display results*/
alert(resultCelcius + " fahrenheit.")

/*Ask user for Temperature in Fahrenheit*/
var fahrenheit = parseInt(prompt("Enter temperature in Fahrenheit: "));

/*Fahrenheit to Celcius*/
var fahrenheitToCelcius = function(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
};

/*Convert to Celcius*/
var resultFahrenheit = fahrenheitToCelcius(fahrenheit).toFixed(2);

/*Display results*/
alert(resultFahrenheit + " celcius.")
