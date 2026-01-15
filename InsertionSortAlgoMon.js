function insertionSort(arr){
    const n = arr.length;
    //start from second element
    for(let i =1; i < n; i++){
        const key = arr[i];
        let j = i -1;
        // shift elements right until correct position found
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--
        }
        //insert key at correct position
        arr[j + 1] = key;
    }
    return arr;
}