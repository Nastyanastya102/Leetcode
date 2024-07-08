/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

const alternate = (word1, word2) => {
    let res = "";
    for (let i = 0; i < word1.length; i++) {
        res += word1[i];
        res += word2[i];
    }
    return res;
 }
var mergeAlternately = function(word1, word2) {
    let newSiring = "";
    if (word1.length === word2.length) {
        return alternate(word1, word2)
    }
    let tail =  word1.length > word2.length ? word1.slice(word2.length) : word2.slice(word1.length);
    return alternate(word1.slice(0, word2.length), word2.slice(0, word1.length)) + tail;
};
