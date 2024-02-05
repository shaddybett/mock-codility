function smallestPositive(A) {
  const positiveIntegers = A.filter((num) => num > 0);

  positiveIntegers.sort((a, b) => a - b);

  let smallestPositive = 1;

  for (let i = 0; i < positiveIntegers.length; i++) {
    if (positiveIntegers[i] === smallestPositive) {
      smallestPositive++;
    } else {
      return smallestPositive;
    }

    return smallestPositive;
  }
}
let number = smallestPositive([1, 3, 6, 4, 1, 2]);
console.log(number);
