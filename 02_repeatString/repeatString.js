const repeatString = function(string, repeatTimes) {
  let finalString = "";

  if (repeatTimes < 0) {
    return finalString = "ERROR";
  }

  for (let i = 0; i < repeatTimes; i++) {
    finalString += string;
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
