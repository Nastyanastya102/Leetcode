/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s = "axc", t = "ahbgdc") {
    if(t.length < s.length) return false;
    let i = 0, j = 0;

    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    if (i === s.length) {
        return true
    }
    return false

};
console.log(isSubsequence());
