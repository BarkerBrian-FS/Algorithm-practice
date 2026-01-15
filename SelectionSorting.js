function selectionSort(arr){
    const n = arr.length;
    //Outer loop moves boundary
    for(let i =0; i < n-1; i++){
        let minIndex = i;
        //Inner loop scans unsorted portion
        for(let j = i+1; j<n; j++){
            //checks to see if j i less than minIndex and changes
            if (arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        //swap minimum to boundary position
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}