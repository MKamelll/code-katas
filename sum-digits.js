/*
  this code adds decimals of numbers
  and return the sum and if the returned value
  is eligible to the process, it keeps on going
*/

function digital_root(n) {
  n = n.toString();
  // handling if the value is negative number
  if (n.includes('-')) {
    let lengthWithoutMinus = n.length - 1;
    if (lengthWithoutMinus > 1) {
      let firstMinus = n.match(/-\d{1}/)[0];
      n = n.replace(firstMinus, '').split('');
      n.push(firstMinus);
      return calculate(n);
    }
  } else {

    if (n.length > 1) {
      n = n.split('');
      return calculate(n);
    }
  }
  return Number(n);
}


// doing the calculation to the output array
function calculate(n) {
  let value = n.reduce((p, c) => Number(p) + Number(c));
  if (value.toString().length > 1) {
    return digital_root(Number(value));
  } else {
    return value;
  }
}

//digital_root(456);
console.log(digital_root(456));