var reverseVowels = function (s) {
  let i = 0,
    j = s.length - 1;

  let l, r;
  let count = 0;
  let stringArr = s.split("");
  while (i < j) {
    console.log('L: ', stringArr[i], " R: ", stringArr[j]);

    if (["a", "e", "i", "o", "u"].includes(stringArr[i].toLowerCase()) && !l) {
      l = i;
    } else if(l) {
     
    } else {
      i++;
    }
    if (["a", "e", "i", "o", "u"].includes(stringArr[j].toLowerCase()) && !r) {
      r = j;
    } else if(r) {
     
    } else {
        j--;
    }
    if (typeof l === 'number' && typeof r === 'number') {
      let temp = stringArr[l];
      stringArr[l] = stringArr[r];
      stringArr[r] = temp;
      i++;
      j--;
      (l = undefined), (r = undefined);
    }

    count++;
  }
  console.log(stringArr.join(""));
};

reverseVowels("Marge, let's \"went.\" I await news telegram.");


var reverseVowels2 = function(s) {
    const vowels = 'aeiouAEIOU';
   let left = 0;
   let right = s.length - 1;
   const sArray = s.split(''); // Convert the string to an array for easier modification
 
   while (left < right) {
     // Move the left pointer to the next vowel
     while (left < right && !vowels.includes(sArray[left])) {
       left++;
     }
 
     // Move the right pointer to the next vowel
     while (left < right && !vowels.includes(sArray[right])) {
       right--;
     }
 
     // Swap the vowels at the left and right pointers
     [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
 
     left++;
     right--;
   }
 
   // Convert the array back to a string
   return sArray.join('');
 };