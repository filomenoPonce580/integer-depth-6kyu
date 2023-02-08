function computeDepth (x){
  let arr = []
  let complete = "0123456789"
  for(let i=1;i<1000;i++){
    let str = (x*i) + "";
    for(let j=0;j<str.length;j++){
      if(arr.indexOf(str[j])==-1){
        arr.push(str[j])
      }
    }
    if(arr.sort().join("")==complete){
      return i
    }
  }
}
