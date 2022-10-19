const num1 = prompt("Enter first number:");
const num2 = prompt("Enter second number:");

const x = parseFloat(num1);
const y =parseFloat(num2);

const sum = x + y
const subtraction = x - y
const multiplication = x * y
const division = x / y

alert(
  "Results:\n" +
  "\nSum: " + sum +
  "\nSubtraction: " + subtraction +
  "\nMultiplication: " + multiplication +
  "\nDivision: " + division
)
