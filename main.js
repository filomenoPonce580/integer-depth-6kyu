function computeDepth (n){
  //create empty array
  let arr = []
  //create what completed set should look like
  let complete = "0123456789"
  
  //for loop, multiplying n by 1-1000
  for(let i=1;i<1000;i++){
    //convert n*i into a string
    let str = (n*i) + "";
    
    //new for loop, checking if str[j] is in arr. if the index is -1(therefore nonexistent), then we push str[j] into arr
    for(let j=0;j<str.length;j++){
      if(arr.indexOf(str[j])==-1){
        arr.push(str[j])
      }
    }
    
    //sort arr and join into a string. if it equals our complete set, return i (which is the multiple that satisfies our comparison)
    if(arr.sort().join("")==complete){
      return i
    }
  }
}
