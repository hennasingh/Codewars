function points(games) {
    // your code here
    let x =0;
    let strArray = games.toString()
    console.log(strArray)
    let array1 = strArray.split(",")
    console.log(array1)
    array1.forEach(element => {
        let value = element.split(":")
        if(parseInt(value[0]) > parseInt(value[1])){
            x+=3;
        }else if(parseInt(value[0]) == parseInt(value[1])){
            x+=1
        }else{
            x+=0
        }
        
    });
    return x;
  }

  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))