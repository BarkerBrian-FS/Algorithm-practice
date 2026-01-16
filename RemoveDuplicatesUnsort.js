function removeDuplicatesUnsorted(arr){
    //set slow pointer
    let slow = 0;
    //iterate through with fast pointer
    for(let fast = 0; fast < arr.length; fast++){
        //set duplicate to false for check later
        let duplicate = false;
        //iterate with i
        for (let i = 0; i < slow; i++){
            //check if fast and i are the same
            if(arr[fast] === arr[i]){
                //set duplicate to true
                duplicate = true
                //break the loop 
                break
            }
        }
        //check if no duplicate
        if(!duplicate){
            //move slow to fast 
            arr[slow] = arr[fast]
            //move slow forward
            slow++
        }
    }
    //keep only unique elements
    arr.length = slow
    return slow 
}