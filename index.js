console.log("hello");
function solution(A) {
  A.sort((a, b) => a - b);

  let smallestPositive = 1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= 0) {
      continue;
    }

    if (A[i] === smallestPositive) {
      smallestPositive++;
    } else {
      return smallestPositive;
    }
    return smallestPositive;
  }
}
let number = A([1, 3, 6, 4, 1, 2]);
console.log(number);
