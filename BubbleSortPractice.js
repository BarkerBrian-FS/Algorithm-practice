function bubbleSort(arr){
    const n = arr.length;
    // outer loop for each pass
    for(let i=0; i < n -1; i++){
        let swapped = false;
    // inner loop for comparisons
    for( let j=0; j<n -1-i; j++){
        //compare adjacent elements
        if(arr[j]> arr[j +1]){
            // swap if in wrong order
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            swapped = true
        }
    }
    // Early termination if no swaps
    if(!swapped) break;
    }
    return arr
}

