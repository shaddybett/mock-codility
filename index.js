function smallestPositiveIntegerNotInArray(A) {
  // Filter out non-positive integers
  const positiveIntegers = A.filter((num) => num > 0);

  // Sort the positive integers in ascending order
  positiveIntegers.sort((a, b) => a - b);

  let smallestPositive = 1;

  // Iterate through the sorted positive integers
  for (let i = 0; i < positiveIntegers.length; i++) {
    // Check if the current element is equal to the expected smallest positive integer
    if (positiveIntegers[i] === smallestPositive) {
      smallestPositive++;
    } else {
      // If not, we found the smallest positive integer not in the array
      return smallestPositive;
    }
  }

  // If all positive integers in sequence, return the next one
  return smallestPositive;
}

// Example usage:
console.log(smallestPositiveIntegerNotInArray([1, 3, 6, 4, 1, 2])); // Output: 5
console.log(smallestPositiveIntegerNotInArray([1, 2, 3])); // Output: 4
console.log(smallestPositiveIntegerNotInArray([-1, -3])); // Output: 1
