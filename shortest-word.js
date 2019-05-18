/*
  this function returns the shortest word
  in a given string
*/

function findShort(s){
  if (s) {
    s = s.split(' ');
    let sortedString = s.sort((a, b) => {
        if (b.length > a.length) {
            return -1;
        } else {
            return 1;
        }
    })
    return sortedString[0].length;
  } else {
    return 'Not valid string'
  }
}
  
// test
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));