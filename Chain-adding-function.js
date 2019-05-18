/*
  add each value to the previous one 'currying'
*/
function add(n) {
  function total(v) {
    return add(v + n);
  }
  total.toString = () => {
    return n;
  };
  return total;
}

//add(1)(2)(3)(4)
// test
console.log(add(1) == 1);
console.log(add(1)(2) == 3);
console.log(add(1)(2)(3)(4) == 10);
