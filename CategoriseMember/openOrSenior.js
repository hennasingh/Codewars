function openOrSenior(data){
    // ...
    return data.map(element => {
      
      return (element[0] >= 55 && element[1] > 7 ? "Senior": "Open")
    })
    
  }

  console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))

  /**
   * Clever Solution
   */

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }