function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return mergeSort(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    const sortedArr = [];
    while(leftArr.length && rightArr){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
   return [...sortedArr, ...leftArr,...rightArr]
}


const arr = [8,20,-2,4,-6];
console.log(mergeSort(arr));

//Big O = O(nlogn)


function mergeSort(nums){
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length/2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)

    return mergeSort(mergeSort(left),mergeSort(right))
}

function merge(left, right){
    let sortedNums = [];
    let i = 0
    let j = 0

        while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sortedNums.push(left[i]);
            i++;
        } else {
            sortedNums.push(right[j]);
            j++;
        }
    }

    return [
        ...sortedNums,
        ...left.slice(i),
        ...right.slice(j)
    ];
}

/* can use multiple while loops to avoid returning slice
   while i < len(first):
        final.append(first[i])
        i += 1
    while j < len(second):
        final.append(second[j])
        j += 1
    return final
*/


