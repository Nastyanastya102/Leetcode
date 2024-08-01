/**
 * @param {string} digits
 * @return {string[]}
 */


let hashTable = ["", "", "abc", "def", "ghi", "jkl",
    "mno", "pqrs", "tuv", "wxyz"];

var printDigits = (digits, curr, output, n, aux) => {
    if (n === curr) {
        // aux.push(output.join(""));
        console.log(output.join(""));
        return;
    }

    for (let i = 0; i < hashTable[digits[curr]].length; i++) {
        output.push(hashTable[digits[curr]][i]);
        printDigits(digits, curr + 1, output, n, aux);
        output.pop();

        if (digits[curr] === 0 || digits[curr] === 1) return;
    }
}

var letterCombinations = function (digits) {
    let aux = []
    if(!digits.length) return [];
    printDigits(digits.split(""), 0, [], digits.length, aux);
    return aux;
};

letterCombinations("23"); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]