let number = [42, 17, 83, 29, 56, 73];
// sort in place
number.sort((a, b)=> a-b);

//create new sorted array
let original = [42, 17, 83, 29, 56, 73];
let sortedNumbers = [...original].sort((a,b)=> a-b);

//binary search on sorted data
function binarySearch(arr, target){
    let left =0;
    let right = arr.length-1;
    while(left <= right){
        const mid = Math.floor((left+ right)/2);
        if (arr[mid]===target) return mid;
        if(arr[mid] < target) left= mid+1;
        else right = mid - 1;
            
    }
    return -1
}