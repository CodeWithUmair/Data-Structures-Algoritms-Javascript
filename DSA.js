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

/*
Count Unique Number - Problem 3
                  i, j
input -> array = [1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 9, 9, 9, 10]
output -> 10
*/

// Condition;
// 1. i=0 , j=1
// 2. arr[i] !== arr[j]
// 3. i++
// 4. arr[i] = arr[j]

// Solution - 1

// function uniqueNumber(arr) {
//   if (arr.length) {
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] !== arr[j]) {
//         i++;
//         arr[i] = arr[j];
//       }
//     }
//     return i + 1;
//   } else {
//     throw new Error(`Array is empty`);
//   }
// }
// const result = uniqueNumber([
//   1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 9, 9, 9, 10,
// ]);
// console.log(result);

// o(n) linear time complexity

/*
Count largest number of consecutive digits
[1, 2, 3, 5, 3, 6, 4, 7, 8, 4] = total elements - 10
num = 4
sum => 25
*/
