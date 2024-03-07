// function checkDuplicates(nums) {
//     const numSet = new Set(nums).size;
//     if (numSet !== nums.length) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let numbers = checkDuplicates([1,2,3,4,5])
// console.log (numbers)

// function findDuplicates(nums) {
//     const numSet = new Set();
//     const duplicates = []

//     for (let num of nums) {
//         if (numSet.has (num)) {
//             duplicates.push(num)
//         }
//         else {
//             numSet.add(num)
//         }
//     }
//     console.log(numSet)
//     console.log(duplicates)
// }
// numbers = findDuplicates([1,2,3,4,1,2])

// function containDuplicate(nums,k) {
//     const numSet = new Set();
//     const duplicates = {};

//     for (let i = 0; i <nums.length;i ++) {
//         const num = nums[i];
//         if (numSet.has(num)) {
//             const prevIndex = duplicates[num];
//             if(i - prevIndex <= k) {
//                 return true;
//             }
//         }
//         numSet.add(num)
//         duplicates[num] = i;
//     }
//     return false;
// }
// numbers = containDuplicate([1,2,3,1], 3)
// console.log(numbers)

// function sortList(nums) {
//     const ordered = nums.sort((a,b)=> a-b)
//     return ordered;
// }
// let numbers = sortList([4,8,7,5,6,2,1,3])
// console.log(numbers)

// function sortList(nums) {
//   const numbers = nums.map((num, index) => ({ num, index }));
//   numbers.sort((a, b) => a.num - b.num);
//   const sorted = numbers.map(item => item.num);
//   return sorted
// //   console.log(numbers);
// }
// let number = sortList([4,2,3,1]);
// console.log(number);

// function sortedList(nums) {
//   const numSet = new Set();
//   const duplicates = [];

//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     if (numSet.has(num)) {
//       return num;
//     } else {
//       numSet.add(num);
//     }

//   }
// //   return duplicates.length;
// //   return { unique: Array.from(numSet), duplicates };
// }
// let numbers = sortedList([2, 4, 6, 8, 3, 6, 9, 4]);
// console.log(numbers)

// // function firstDup >>>>>>

// function sortList(head) {
//     const ordered = head.sort((a,b)=> a-b)
//     return ordered;
// }
// let number = sortList([4,2,1,3])
// console.log(number)

// function findIndex(nums) {
//   let indices = {};

//   nums.forEach((num, index) => {
//     indices[num] = index;
//   });
//   return indices;
// }
// let numbers = findIndex([1, 2, 3, 4, 5]);
// console.log(numbers);

// function returnIndices(nums) {
//     let indices = {}
//     nums.forEach((num,index)=>{
//         indices[num] = index;
//     });
//     return indices;
// }
// let numbers = findIndex([1, 2, 3, 4, 5]);
// console.log(numbers);

// if has duplicates return true else return false >>>>>>>>>>>
// function checkDuplicates(nums) {
//     let unique = new Set()
//     for (let i = 0;i < nums.length; i++) {
//         let num = nums[i];
//         if (unique.has(num)){
//             return true;
//         }
//         else {
//             unique.add(num)
//         }
//     }
//     return false;
// }
// let number = checkDuplicates([1,2,3,4,5,6])
// console.log(number)

// return duplicated numbers >>>>>>>
// function checkDuplicates(nums) {
//     const unique = new Set()
//     const duplicates = []

//     for (let i = 0;i < nums.length;i++) {
//         let num = nums[i]
//         if(unique.has(num)) {
//             duplicates.push (num)
//         }
//         else {
//             unique.add(num);
//         }
//     }
//     return duplicates;
// }
// let number = checkDuplicates([1,2,3,4,1])
// console.log(number)

// arranging numbers in ascending order
// function arrangeNUmbers(nums) {
//     return nums.sort((a,b)=> a-b)
// }
// let numbers = arrangeNUmbers([4,3,2,1,5])
// console.log(numbers)

// returning two sum targets >>>>>>>
function twoSum(nums, target) {
    const indices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (indices.hasOwnProperty(complement)) {
            return [indices[complement], i];
        }
        indices[nums[i]] = i;
    }

    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]

// return hello world >>

// function greet(arg){
//     return 'Hello world';
// }
// let n = greet()
// console.log(n)

// finding even or odd numbers >>>>>>>
// function findNumbers(nums) {
//   let even = [];
//   let odd = [];
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     if (num % 2 === 0) {
//       even.push(num);
//     } else {
//       odd.push(num);
//     }
//   }
//   return even;
// }
// let numbers = findNumbers([1, 2, 3, 4, 5, 6]);
// console.log(numbers);




// return incremented numbers >>>>>>>
// function counting(num) {
//     return ()=> {
//         return num++
//     }
// }
// const value = counting(5)
// console.log(value());
// console.log(value());
// console.log(value())

// function numbers(num) {
//     num++;
//     for (let i = 0;i<num.length;i++){
//         let nums = i+num;
//         return nums
//     }
//     return num;

    
    
// }
// let value = numbers(5)
// console.log(value)




// function solution(A, B, C, D) {
//     let digits = [A, B, C, D];
//     let count = 0;

//     for (let a = 0; a < digits.length; a++) {
//         for (let b = 0; b < digits.length; b++) {
//             for (let c = 0; c < digits.length; c++) {
//                 for (let d = 0; d < digits.length; d++) {
//                     if (a !== b && a !== c && a !== d && b !== c && b !== d && c !== d) {
//                         let hours = digits[a] * 10 + digits[b];
//                         let mins = digits[c] * 10 + digits[d];

//                         if (hours < 24 && mins < 60) {
//                             count++;
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return count / 2; 
// }

// let nums = solution(1, 2, 3, 4);
// console.log(nums); 




// function solution(A, B, C, D) {
//     let digits = [A, B, C, D];
//     let count = 0;
//     for (let a = 0; a < digits.length; a++) {
//         for (let b = 0; b < digits.length; b++) {
//             for (let c = 0; c < digits.length; c++) {
//                 for (let d = 0; d < digits.length; d++) {
//                     if (a !== b && a !== c && a !== d && b !== c && b !== d && c !== d) {
//                         let hours = digits[a] * 10 + digits[b];
//                         let mins = digits[c] * 10 + digits[d];

//                         if (hours < 24 && mins < 60) {
//                             count++;
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return count;
// }

// let nums = solution(1, 2, 3, 4);
// console.log(nums); 


