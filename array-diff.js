/*
  function to return difference between
  two arrays having the first one representing
  the bigger value
*/

function array_diff(a, b) {
  if (a.length) {
    let diff = [...getDiff(a,b), ...getDiff(b,a)];
    return diff;
  } else {
    return []
  }
}

function getDiff(a, b) {
  let diff = a.filter((number) => {
    if (b.includes(number)) {
      return false;
    } else {
      return true;
    }
  })
  return diff;
}

// test
console.log(array_diff([3,6,10,15], []));