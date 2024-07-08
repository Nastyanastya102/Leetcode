/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed = [1, 0, 0, 0, 1], n = 1) {
  let freeSpots = 0;
  let i = 0,
    j = 1,
    l = 2;
  for (let k = i; l < flowerbed.length; k++) {
    if (i === 0 && !flowerbed[i] && !flowerbed[j]) {
      flowerbed[i] = 1;
      freeSpots += 1;
    }
    if (l === flowerbed.length - 1 && !flowerbed[l] && !flowerbed[j]) {
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

