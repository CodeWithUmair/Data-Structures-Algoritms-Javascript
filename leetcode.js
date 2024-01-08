/**
    27. Remove Element
*/

//  Solution: 👉 JavaScript 🔥🔥

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     let index = 0;
//     for(let i=0; i < nums.length; i++) {
//         if(nums[i] !== val) {
//             nums[index] = nums[i];
//             index++;
//         }
//     }
//     return index;
// };

// const res = removeElement([3,2,2,3,2], 3);
// console.log("🚀 ~ file: leetcode.js:26 ~ res:", res);

/**
    26. Remove Duplicates from Sorted Array
*/

//  Solution: 👉 JavaScript 🔥🔥

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     if(nums.length === 0 ) return 0;

//     let pointer = 0;

//     for(let i=1; i<nums.length; i++) {
//         if(nums[pointer] !== nums[i]) {
//             pointer++;
//             nums[pointer] = nums[i];
//         }
//     }

//     return pointer + 1;
// };

// const res = removeDuplicates([1,1,2]);
// console.log("🚀 ~ file: leetcode.js:26 ~ res:", res);

/**
    80. Remove Duplicates from Sorted Array II
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     if(nums.length <= 2 ) return nums.length;

//     let count = 1;
//     let slow = 1;

//     for(let fast=1; fast<nums.length; fast++) {
//         if(nums[fast] === nums[fast - 1]) {
//             count++;
//         } else {
//             count = 1;
//         }

//         if(count <= 2) {
//             nums[slow] = nums[fast];
//             slow++;
//         }
//     }

//     return slow;
// };

// const res = removeDuplicates([1,1,1,2,2,3]);
// console.log("🚀 ~ file: leetcode.js:78 ~ res:", res);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length; // To handle cases where k is larger than the array length

  // Reverse the whole array, then reverse the first k elements and the rest separately
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

const response = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log("🚀 ~ file: leetcode.js:99 ~ response:", response);
