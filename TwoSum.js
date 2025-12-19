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



