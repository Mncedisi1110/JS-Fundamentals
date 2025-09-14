for (let i = 0; i<=9; i++){
  const side = [10]
  const square =  side*side;
  const size = side*side;
  side.forEach(side => {
    if (side[0]){
      console.log("Size 10");
    }else if(side[1]) {
      console.log("Size 3");
    }else{
      console.log("Nop")
    }
  });

}
