function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    
  let str = dna.split("");
  
  for(let i =0; i< str.length; i++){
    if(str[i] === 'T'){
      str[i] = 'U';
    }
  }
  return str.join("")
  }