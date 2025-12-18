// Filter Array Problem 


let transform = function (arr, fn){
    let res = [];
    for (let i = 0; i < arr.length; i++) {
    if(fn(arr[i], Number(i))){
        res.push(arr[i])
    }
  }
  return res
}