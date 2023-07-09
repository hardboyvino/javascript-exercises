const getTheTitles = function(titles) {
    let bookList = [];
        for (let i = 0; i < titles.length; i++) {
            for (let key in titles[i]) {
                if (key === "title") {
                    bookList.push(titles[i][key]);
                }
            }
        }
    return bookList;
};

// Do not edit below this line
module.exports = getTheTitles;
 