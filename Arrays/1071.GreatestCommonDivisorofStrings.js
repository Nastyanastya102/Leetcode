/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

let gcd = function (x, y) {
  if (y == 0) {
    return x;
  } else {
    return gcd(y, x % y);
  }
};
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 == str2 + str1) {
    let gcdLength = gcd(str1.length, str2.length);
    return str1.substr(0, gcdLength);
  }

  return "";
};

console.log(gcdOfStrings("ABCABC", "ABC"));

// [1,0,0,0,1,0,0]
// [1,0,0,0,1]
var canPlaceFlowers = function(flowerbed = [1,0,0,0,1], n = 1) {
  let freeSpots = 0;
  let i = 0, j = 1, l = 2;
  for (let k = i; l < flowerbed.length; k++) {
    if (i === 0 && !flowerbed[i] && !flowerbed[j]) {
      flowerbed[i] = 1;
      freeSpots += 1;
    }
    if (l === flowerbed.length -1 && !flowerbed[l] && !flowerbed[j]) {
      flowerbed[l] = 1;
      freeSpots += 1;
    }

    if (!flowerbed[i] && !flowerbed[j] && !flowerbed[l]) {
      freeSpots += 1;
      flowerbed[j] = 1;
    }
    i++;
    j++;
    l++;
  }
  return freeSpots >= n;
};
