/*
  returns a string hashtag-wise
*/

function generateHashtag (str) {
  const stringFinal = '#' + str.split(' ').map((word) => word.replace(/^([a-z])/g, (match) => match.toUpperCase())).join('');
  return stringFinal.length > 140 || !/\w/g.test(stringFinal) ? false : stringFinal;
}

// test
console.log(generateHashtag("do We have A Hashtag"), "#DoWeHaveAHashtag")