const fibonacci = function(n) {
    if (typeof Number(n) != "number" || Number(n) < 1) {
        return "OOPS";
    } else {
        const phi = 1.61803398875;
        const demoniator = 5 ** 0.5;

        // ensure it stays a number
        n = Number(n);

        // Just coded Binet's formula rounded down to nearest integar
        return Math.floor(((phi ** (n)) - ((-1 * phi) ** (-1 * (n)))) / demoniator);
    }
};

// Do not edit below this line
module.exports = fibonacci;
