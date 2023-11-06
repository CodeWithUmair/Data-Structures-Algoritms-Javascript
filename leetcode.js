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
var removeDuplicates = function(nums) {
    if(nums.length === 0 ) return 0;

    let pointer = 0;

    for(let i=1; i<nums.length; i++) {
        if(nums[pointer] !== nums[i]) {
            pointer++;
            nums[pointer] = nums[i];
        }
    }
    
    return pointer + 1;
};

const res = removeDuplicates([1,1,2]);
console.log("🚀 ~ file: leetcode.js:26 ~ res:", res);
