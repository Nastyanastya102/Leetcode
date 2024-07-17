/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let max = 0;
      let currentVowelCount = 0;
      let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
      
      for (let i = 0; i < k; i++) {
          if (vowels.has(s[i])) {
              currentVowelCount++;
          }
      }
      max = currentVowelCount;
      
      for (let i = k; i < s.length; i++) {
          if (vowels.has(s[i])) {
              currentVowelCount++;
          }
          if (vowels.has(s[i - k])) {
              currentVowelCount--;
          }
          max = Math.max(max, currentVowelCount);
      }
      
      return max;
  };