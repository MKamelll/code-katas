/*
  function that returns the corresponding
  DNA sequence bases for a given sequence
*/

function DNAStrand(dna){
  const dnaValues = {'A': 'T',
  'T': 'A',
  'G': 'C',
  'C': 'G'
  }
  if (typeof(dna) === 'string') {
    dna = dna.toUpperCase();
    if (dna.length > 0) {
      dna = dna.trim().replace(/\s/g, '').split('');
      for (let value of dna) {
        if (!dnaValues[value]) {
          return 'Thats not a valid sequence!'
        }
      }
      dna = dna.map((value) => dnaValues[value]);
      return dna.join('');
    } else {
      return 'You dont have DNA :('
    }
  } else {
    return 'Value should be a string!'
  }
}

// test
console.log(DNAStrand('TACG'));
