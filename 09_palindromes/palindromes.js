const palindromes = function (string) {
    string = string.toLowerCase();
    let originalString = "";
    let newString = "";

    // go through the given string and get only the alphabets
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (isLetterOrNumber(char)) {
            originalString += char;
        }
    }

    // reverse originalString into a newString
    for (let i = (originalString.length - 1); i >= 0; i--) {
        newString += originalString[i];
    }
    
    // check if there are the same
    if (originalString === newString) {
        return true
    } else {
        return false
    }
};
 
function isLetterOrNumber(char) {
    let charCode = char.charCodeAt(0);
    return (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57);
}

// Do not edit below this line
module.exports = palindromes;
