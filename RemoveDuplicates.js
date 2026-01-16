function removeDuplicates(arr){
    // start slow at beginning
    let slow = 0;
    //iterate through with fast
    for(let fast = 0; fast< arr.length; fast++){
        //check if fast and slow are the same
        if(arr[fast]!== arr[slow]){
            //move slow forward
            slow++
            //set slow to fast
            arr[slow] = arr[fast]
        }
    }
    //return answer
    return slow+1
}
