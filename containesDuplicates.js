//contains duplicates
function containsDuplicates(nums){
    //make a set
    let seen = new Set()
    //loop through nums 
    for(let num of nums){
        //check if num is in set
        if(seen.has(num)) return true;
        //add the num otherwise
        seen.add(num)
    }
    //no duplicates return false
    return false
}

//twoSum
function twoSum(nums, target){
    let map = new Map();
    for(let i=0; i< nums.length; i++){
        const complement = target -nums[i];
        if(map.has(complement)) return [map.get(complement), i]
        map.set(nums[i], i)
    }
}