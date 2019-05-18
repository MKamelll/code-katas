/*
  this function takes a string, each word
  has a number in it and it sorts the string
  according to the embedded number
*/

function order(words){
  let value = words.split(' ').sort((a, b) => {
    if (a.match(/\d/)[0] > b.match(/\d/)[0]) {
      return 1;
    } else {
      return -1;
    }
  })
  return value.join(' ');
}

// test
const stringInput = '4of Fo1r pe6ople g3ood th5e the2';
console.log(order(stringInput));