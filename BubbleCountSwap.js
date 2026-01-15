
function countSwapsBubbleSort(arr){
    const n = arr.length;
    //make count variable
    let count = 0;
    // loop through and set swapped to false
    for(let i = 0; i< n -1; i++){
        let swapped = false;
        // loop through arr and compare
        for(let j=0; j< n -1-1; j++){
            //check if j is greater than j+1
            if(arr[j]> arr[j+1]){
                // swap if necessary
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                //change boolean value for swap check
                swapped = true 
                //increment count
                count++
            }
        }
        //set swap check to break early
        if(!swapped) break;
    }
    //return count
    return count;
}