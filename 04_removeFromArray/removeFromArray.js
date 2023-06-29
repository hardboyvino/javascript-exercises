// define arguments for 1st the array and 2nd the variables to remove
// but since I do not know how many variables will be passed use ...
// this is known as the rest operator it means 
// "take any other arguments that get passed into this function and put them into an array called toRemove"
// So, if you call removeFromArray([1, 2, 3, 4, 5], 2, 4), 
// inside the function, array will be [1, 2, 3, 4, 5], and toRemove will be [2, 4].
const removeFromArray = function(array, ...toRemove) {
    let newArray = [];

    // this is the same as [num for num in numbers] in python
    array.forEach((item) => {
        // if ...toRemove does not include the item
        // then add it to newArray, else ignore it
        if (!toRemove.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
