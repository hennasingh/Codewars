function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }

  function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((sum, x) => sum + x) < yourPoints * classPoints.length;
  }