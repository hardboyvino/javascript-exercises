const convertToCelsius = function(fahrTemp) {
  celTemp = ((fahrTemp - 32) * 5) / 9;
  return Math.round(celTemp * 10) / 10;
};

const convertToFahrenheit = function(celTemp) {
  fahrTemp = ((celTemp * 9) / 5) + 32;
  return Math.round(fahrTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
