/**
 * 
Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
For Example:
const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
should return false.
-----------
const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
should return true.

2 parameters - arrays - no size limit
return true or false

 */

// function givenTwoArrays(array1, array2) {
//     for(let i=0; i<array1.length; i++){
//       for(let j=0; j<array2.length; j++) {
//         if(array1[i] === array2[j]){
//             console.log("Brute force solution: ", array1[i], array2[j]);
//           return true;
//         }
//       }
//     }
//     return false;
// };

function givenTwoArrays(arr1, arr2) {
    //loop through first array and create object where properties === items in the array

    const objForTwoArrays = {};

    for (let i=0; i<arr1.length; i++){
        if(!objForTwoArrays[arr1[i]]) {
            const item = arr1[i];
            objForTwoArrays[item] = true;
        }
    }
    
    ///loop through secong array and check if item in secong array exists on created object.
    for (let j=0; j<arr2.length; j++) {
        if(objForTwoArrays[arr2[j]]) {
            return true;
        }
    }
    return false;
}


  const result = givenTwoArrays(['a', 'b', 'c', 'x'], ['z', 'y', 'x']);
  console.log(result);