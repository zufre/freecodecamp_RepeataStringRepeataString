function repeatStringNumTimes(str, num) {
  let repStr = "";
  if (num > 0){
    for (let i = 0; i < num; i++){
      repStr += str;
    }
    
  }
  return repStr;
}

repeatStringNumTimes("abc", 3);
