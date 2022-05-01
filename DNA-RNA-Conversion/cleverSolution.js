function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }

  function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }

  function DNAtoRNA(dna){
    return dna.split("").map(function(rna){
      return rna.replace("T","U")
    }).join("")
  }