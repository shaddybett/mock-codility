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

// // function firstDup

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




function checkDuplicates(nums) {
    const unique = new Set(nums)
    for (let i = 0;i<nums.length;i++) {
        let num = nums[i]
        if(unique.has(num)) {
            return true;

        }
        else {
            return false;
        }
    }
}
let number = checkDuplicates([1,2,3,4,5,6])
console.log(number)