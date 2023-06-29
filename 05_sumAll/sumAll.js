const sumAll = function(num1, num2) {
    // assign a sum variable
    let sum =  0;


    // if there a number lower than 0 or a non-number is entered, return an error
    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (num2 > num1) {
    // if the num2 > num1
    // for i equal to num1 but less than num2 + 1
    // add the number to sum
        for (let i = num1; i < (num2 + 1); i++) {
            sum += i;
        }
    } else if (num1 > num2) {
        for (let i = num2; i < (num1 + 1); i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
