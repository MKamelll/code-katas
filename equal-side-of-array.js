/*
  function that returns a value at which
  sum of values at both sides of an array
  is equal
*/

function findEvenIndex(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    let befValues = arr.slice(0, i).reduce((a, b) => a + b);
    let aftValues = arr.slice(i + 1, arr.length).reduce((a, b) => a + b);
    if (befValues === aftValues) {
      return i;
    }
  }
  return -1;
}

// test
const arrayTest = [1,100,50,-51,1,1];
console.log(findEvenIndex(arrayTest));