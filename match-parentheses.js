/*
  this checks string for matched parentheses
*/

function validParentheses(parens) {
  const matches = getMatches(parens);
  const brackets = ['(', ')', '[', ']', '{', '}'];
  const allSum = brackets.map((bracket) => getDataLength(parens, bracket));
  const allSubstract = allSum.reduce((a, b) => a - b);
  return allSubstract === 0 && !matches;
}

function getDataLength(parens, bracket) {
  return parens.split('').filter((i) => i === `${bracket}`).length;
}

function getMatches(parens) {
  return /^[)}]|[([{]$/g.test(parens);
}

// test
console.log(validParentheses(')()))(())('));