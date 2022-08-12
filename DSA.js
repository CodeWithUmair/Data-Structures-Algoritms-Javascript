/*
Checking sum zero - Problem 1 
[-5,-4,-3,-2,0,2,4,6,8] -> input
[-4, 4] -> output
*/

// Solution - 1

// function getSumPairZero(arr) {
//   for (let number of arr) {
//     for (let i = 1; i < arr.length; i++) {
//       if (number + arr[i] === 0) {
//         return [number, arr[i]];
//       }
//     }
//   }
// }
// const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

// Solution - 2 Optimized Solution

// function findSumPairZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }
// const result = findSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

/*
Checking String Anagram - Problem 2
"awesome" -> "someewa"
"wow" -> "wwo"
"hello" -> "lolhe"
*/

// Condition
// 1. length check (for both strings)
// 2. String "awesome"
// 3. output -> {a:0, w:0, e:0, s:0, o:0, m:0, e:0}

// Solution - 1

// function isAnagram(string1, string2) {
//   if (string1.length !== string2.length) {
//     return false;
//   }
//   let count = {};
//   for (let letter of string1) {
//     count[letter] = (count[letter] || 0) + 1;
//     console.log(count[letter]);
//   }
//   for (let items of string2) {
//     if (!count[items]) {
//       return false;
//     }
//     count[items] -= 1;
//   }
//   return true;
// }
// const check = isAnagram("awesome", "someewa");
// console.log(check);

// linear time complexity o(n)
