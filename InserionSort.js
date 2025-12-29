function insertionSort(arr){
    for(let i=0; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1;
        while( j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j = j-1;
        }
        arr[j +1] = numberToInsert
    }
}



const arr = [8,20,-2,4,-6];
insertionSort(arr);
console.log(arr);

//Big O = O(n2)

function insertionSort(nums) {
    //loops through nums array
    for (let i = 0; i < nums.length; i++) {
        //adds j pointer at i
        let j = i;
        //starts while loop with 2 conditions
        //j > 0 ensures j doesn't go passed beginning
        //2nd condition checks if number to left is larger and then leads to a swap
        while (j > 0 && nums[j - 1] > nums[j]) {
            [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            //sends one more to the left
            j--;
        }
    }
    return nums;
}