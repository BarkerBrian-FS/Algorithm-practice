/*
Given an array of integers sorted in increasing order and a target, find the index of the first element in the array that is larger than or equal to the target. Assume that it is guaranteed to find a satisfying number.
*/

function firstNotSmaller(arr, target){
    let left = 0;
    let right = arr.length -1;
    let boundaryIndex = -1;

    while(left <= right){
        let mid = Math.floor((left + right)/2)
        if(arr[mid] >= target){
            boundaryIndex = mid
            right = mid -1
        } else {
            let = mid + 1
        }
    }
    return boundaryIndex
}

//Find first occurence

function firstOccurence(arr, target){
    let left = 0;
    let right = arr.length -1;
    let targetIndex = -1
    while(left <= right){
        if (arr[mid] === target){
            targetIndex = mid
            right = mid -1
        } else if( arr[mid] < target){
            left = mid+1
        } else {
            right = mid -1
        }
    }
    return targetIndex
}

//Find square root

function findSquareRoot(n){
    if(n===0) return 0;
    let left = 1;
    let right = n;
    let res = -1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(mid * mid === n){
            return mid;
        } else if(mid * mid > n){
            right = mid -1;
        }else {
            left = mid + 1
        }
    }
    return res -1
}