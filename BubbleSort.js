function bubbleSort(arr){
    let swapped
    do {
    swapped = false;
    for(let i=0; i < arr.length -1; i++){
        if (arr[i] > arr[i + 1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp
            swapped = true;
        }
    } 
    } while(swapped);
}

const arr = [8,20,-2,4,-6];
bubbleSort(arr);
console.log(arr);

//Big O = O(n2) 


//Bubble Sort 
function bubbleSort(nums){
    // Used to flag passes through while loop
    let swapped = true;
    let end = nums.length;
    
    while(swapped){
        //Reset flag at start of each pass
        swapped = false;
        //Use end -1 in loop to avoid i + 1 going out of bounds
        for(let i =0; i < end-1; i++){
            if(nums[i] > nums[i+1]){
                [nums[i] , nums[i+1]] = [nums[i+1], nums[i]]
                //Record that a swap happened during pass
                swapped = true;
            }
        }
        //shorten the sorted end of the array 
        end--
    }
    return nums
}