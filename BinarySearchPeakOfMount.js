/*
A mountain array is defined as an array that

has at least 3 elements
has an element with the largest value called "peak", with index k. The array elements strictly increase from the first element to A[k], and then strictly decrease from A[k + 1] to the last element of the array. Thus creating a "mountain" of numbers.
That is, given A[0]<...<A[k-1]<A[k]>A[k+1]>...>A[n-1], we need to find the index k. Note that the peak element is neither the first nor the lastIndex of the array.

Find the index of the peak element. Assume there is only one peak element.
*/

function peakOfMount(arr){
    let left = 0;
    let right = arr.length -1;
    let boundaryIndex = -1

    while(left <= right){
        let mid = left + Math.floor((right - left)/2)
            if (arr[mid] > arr[mid+1]){
            boundaryIndex = mid
            right = mid -1
        } else {
            left = mid + 1
        }

    }
    return boundaryIndex
}