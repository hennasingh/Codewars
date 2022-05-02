function betterThanAverage(classPoints, yourPoints) {
    // Your code here
  let total = classPoints.length + 1;
  
  let sum = classPoints.reduce((accumulator, currentValue) => {
    
                             return  accumulator + currentValue
    })
                              
  let avg = Math.floor(sum/total);
    if(avg > yourPoints){
      return false;
    }else {
      return true;
    }
  } 