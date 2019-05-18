/*
  this function returns a string refactored
  as the known someone, someone & someone
*/

function list(names){
  const listNames = names.map((nameob) => nameob.name);
  if (listNames.length > 2) {
    let lastName = listNames.splice(listNames.length - 1);
    let commaNames = listNames.splice(0, listNames.length);
    this.name = commaNames.join(', ') + ' & ' + lastName.join('');
  } else if (listNames.length === 2){
    this.name = listNames.join(' & ');
  } else if (listNames.length < 2) {
    this.name = listNames.join('');
  }
  return this.name;
}

// test
console.log(list([{name: 'Bart'},{name: 'Lisa'}]));