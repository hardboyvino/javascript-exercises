const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let totalSum = 0;
  if (array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
  return totalSum;
};

const multiply = function(...num) {
  let totalMultiply = 1;
  if (num.length === 0) {
    return 0;
  }
  for (let i = 0; i < num.length; i++) {
    totalMultiply *= num[i];
  }
  return totalMultiply;
};

const power = function(...num) {
	return num[0] ** num[1];
};

const factorial = function(num) {
	let totalFactorial = 1;
  if (num === 0) {
    return 1;
  }
  for (let i = 1; i < num+1; i++) {
    totalFactorial *= i;
  }
  return totalFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
