//Hashmap Template
//two sum
//longest substring
//contains duplicates
//freq counting
function example(nums){
    const map = new Map();

    for(let i =0; i < nums.length; i++){
        if(map.has(nums[i])){
            return true
        }
        map.set(nums[i] , i)
    }
    return false
}

//Two pointers template
//Palindrome
//sorted arrays
//pair problems
function twoPointers(arr){
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        if(condition){
            left++
        } else{
            right--
        }
    }
}

//Sliding Window Template
//longest substring
//subarray sum
//fixed variable window
function slidingWindow(arr){
    let left = 0;
    let result = 0;

    for(let right = 0; right < arr.length; right++){
        while(windowInvalid){
            left++
        }
        result = Math.max(result, right - left + 1)
    }
    return result
}

//Binary Search Template
function binarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        const mid = Math.floor((left + right)/2);

        if(arr[mid] === target){
            return mid
        } else if (arr[mid] < target){
            left = mid + 1;
        } else{
            right = mid - 1;
        }
    }
    return -1
}
