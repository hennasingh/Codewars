function longest(s1, s2) {
    // your code
    let str = s1 + s2
    let array = str.split("")
    array.sort()
  
    let sortedArray= Array.from(new Set(array))
    return sortedArray.join('')
    
  }

  console.log(longest("dhfjvcbshjsw", "xxxyybajbjdn"))