function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex= arr.length -1;
    

    while( leftIndex <= rightIndex){
        let middleIndex = Math.floor(leftIndex + rightIndex) /2;
        if (target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex -1
        }else {
            leftIndex = middleIndex +1
        }
    }
    return -1
}

// Big O = O(logn)

function binarySearch(names, target) {
    let left = 0;
    let right = names.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (names[mid] === target) {
            return true;  // found
        } else if (names[mid] < target) {
            left = mid + 1;  // search right half
        } else {
            right = mid - 1;  // search left half
        }
    }

    return false;  // not found
}

// 1000 names: ~10 comparisons
// 1 million names: ~20 comparisons