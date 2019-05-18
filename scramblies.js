/*
  this checks if a string have characters with the enough
  number to create another string
*/

function scramble(str1, str2) {
  const tokenized = str1.split('').reduce((container, curr) => {
    container[curr] ? container[curr] += 1 : container[curr] = 1;
    return container;
  }, {})
  
  for (let i = 0; i < str2.length; i++) {
    const currentLetter = str2[i];
    if (tokenized[currentLetter] && tokenized[currentLetter] >= 1) {
      tokenized[currentLetter] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

// test
console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava', 'javascript'), true);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);

/*
  that works too
*/

// const str2Arr = [...str2],
//   str1Arr = [...str1];
//   let counter = 0;
//   counter = str2Arr.reduce((total, curr) => {
//     if (str1Arr.includes(curr)) {
//       str1Arr.splice(str1Arr.indexOf(curr), 1);
//       return total + 1;
//     } else {
//       return total;
//     }
//   }, 0);
//   return counter === str2.length;

// for (const letter of str2Arr) {
//   if (str1Arr.includes(letter)) {
//     counter += 1;

//   }
// }

// for (const letter of str2Arr) {
//   if (str1Arr.includes(letter)) {
//     finalString.push(letter);
//     str1Arr.splice(str1Arr.indexOf(letter), 1);
//     if (finalString.join('') === str2) {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }