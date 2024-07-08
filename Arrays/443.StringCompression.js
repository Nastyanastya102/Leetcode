/**
 * @param {character[]} chars
 * @return {number}
 */

// var compress = function (chars) {
//   let arr = [];
//   if (chars.length < 2) {
//     return chars.length;
//   }

//   let i = 0,
//     j = 1;

//   while (j <= chars.length) {
//     if (!chars[j]) {
//       arr.push(chars[i]);
//       return arr.length;
//     }

//     if (chars[i] !== chars[j] && i === j - 1) {
//       arr.push(chars[i]);
//       i++;
//       j++;
//     }
//     if (chars[i] === chars[j]) {
//       j++;
//     }

//     if (chars[i] !== chars[j] && i !== j - 1) {
//       console.log(arr);
//       arr.push(chars[i]);
//       let strArr = String(j - i).split("");
//       arr = [...arr, ...strArr.map((el) => Number(el))];
//       i = j;
//       j++;
//     }

//     if (chars[i] === arr.at(-1)) {
//       i++;
//       j++;
//     }
//   }

//   for (let index = 0; index < arr.length; index++) {
//     const element = chars[index];
//     chars[index] = String(arr[index]);
//   }
//   return arr.length;
// };

var compress = function (chars) {
  let arr = [];
  if (chars.length < 2) {
    return chars;
  }

  let i = 0,
    j = 1;

  while (j <= chars.length) {
    if (!chars[j] && chars[i] !== arr.at(-1)) {
      arr.push(chars[i]);
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        chars[index] = element;
      }
      return arr.length;
    }
    if (chars[i] !== chars[j] && i === j - 1) {
      arr.push(chars[i]);
      i++;
      j++;
    }
    if (chars[i] === chars[j]) {
      j++;
    }
    if (chars[i] !== chars[j] && i !== j - 1) {
      arr.push(chars[i]);
      let strArr = String(j - i).split("");
      arr = [...arr, ...strArr.map((el) => Number(el))];
      i = j;
      j++;
    }
    if (chars[i] === arr.at(-1)) {
      i++;
      j++;
    }
  }
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    chars[index] = String(element);
  }

  return chars.length;
};
console.log(compress(["a","a","a","a","a","b"]));
