/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s = "  hello       world  ") {
    
    return s.trim().split(/[\s]+/).reverse().join(' ');
};

var reverseWordsCustome = function(s = "the sky is blue") {
    let arr = [];
    let word = "";
    for (let index = 0; index < s.length; index++) {
        const char = s[index];
        if (char === " " && word.length !== 0 || char === "\n") {
            arr.push(word);
            word = "";
        } else if (char === " ") {
            word = "";
        } else {
            word += char;
        }
    }

    if (word.length) {
        arr.push(word)
        word =  "";
    }
    for (let index = arr.length - 1; index >= 0; index--) {
        const element = arr[index];
        if (index !== 0) {
         word += element + " ";
        } else {
        word += element;
        }
    }
    return word;
};
