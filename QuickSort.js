function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
   let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i = 0; i<arr.length-1; i++){
        if (arr[i]<pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

const arr = [8,20,-2,4,-6];
quickSort(arr);
console.log(arr);

//Worst case Big O = O(n2) Best Case = O(nlogn)


/*Complete quick_sort(nums, low, high):
If low is less than high:
Partition the input list using the partition function and store the returned "middle" index
Recursively call quick_sort on the left side of the partition
Recursively call quick_sort on the right side of the partition
partition(nums, low, high):
Set pivot to the element at index high
Set i to the index before low
For each index (j) from low to high:
If the element at index j is less than the pivot:
Increment i by 1
Swap the element at index i with the element at index j
Swap the element to the right of i with the element at index high (the pivot's position)
Return the new index of the pivot element (the item in the "middle" of the partition) */

function quickSort(nums, low, high) {
    if (low < high) {
        const p = partition(nums, low, high);
        quickSort(nums, low, p - 1);
        quickSort(nums, p + 1, high);
    }
}

function partition(nums, low, high) {
    const pivot = nums[high];
    let i = low;

    for (let j = low; j < high; j++) {
        if (nums[j] < pivot) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }

    [nums[i], nums[high]] = [nums[high], nums[i]];
    return i;
}






