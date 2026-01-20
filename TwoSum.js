// Brute Force
let twoSum = function(nums, target){
    let res = []
    for(let i =0; i < nums.length; i++){
        for(let j= i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                res.push(i, j)
            }
        }
        return res
    }
}

//Optimised
let twoSumOpt = function(nums, target){
    let storage = {};

    for(let [index,num] of nums.entries()){
        if(storage[num] !== undefined) return [storage[num], index];
        storage[target-num] = index;
    }
}

// Two Sum Sorted

function twoSumSorted(arr, target){
    //set left pointer to first index
    let l = 0;
    //set right to last index
    let r = arr.length -1;
    // while l < r move through array 
    while(l < r){
        // set twosum to sum of l and r
        const twoSum = arr[l] + arr[r];
        //check if two sum is target
        if (twoSum === target){
            //return l and r 
            return [l ,r];
        } 
        //check if less than target
        if(twoSum < target){
            //move left further down
            l++
            //if greater than target sub r
        }else {
            r--
        }
    }
    return []
}

