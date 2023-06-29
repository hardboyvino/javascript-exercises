const reverseString = function(word) {
    // initialize the reverseWord and array variables
    let reversedArray = []
    let reversedWord = ""

    // for the length of the word, if the word is not empty,
    // get every letter into an array
    if (word.length !== 0) {
        for (let i = 0; i < word.length; i++) {
            reversedArray.unshift(word[i]);
        }
    } else {
        return "";
    }

    // join the array backwards
    reversedWord = reversedArray.join("");

    // return the reversed array
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
