/*
  this returns a string with each letter of an even index
  number as uppercase character and odd number as lowercase
  character
*/

function toWeirdCase(string){
  let stringList;
  if (string.includes(' ')) {
    stringList = string.split(' ');
  } else {
    stringList = new Array(string);
  }
  return stringList.map((word) => {
    return word.split('').map((letter, i) => {
      return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');
  }).join(' ');
}

// test
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');