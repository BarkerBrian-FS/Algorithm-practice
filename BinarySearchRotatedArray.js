/*
A sorted array of unique integers was rotated at an unknown pivot. For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. Find the index of the minimum element in this array.
*/

function rotatedArray(arr){
    let left = 0
    let right = arr.length-1
    let boundaryIndex = -1

    while(left <= right){
        let mid = left + Math.floor((right - left)/2)
        if(arr[mid] <= arr[arr.length-1]){
            boundaryIndex = mid;
            right = mid -1
        } else{
            left = mid + 1
        }
    }
    return boundaryIndex
}