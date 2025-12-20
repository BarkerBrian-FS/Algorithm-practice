let maxSubArray = function(nums){
    let solution = nums[0];
    for(let i = 1; i<nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
        solution = Math.max(solution, nums[i])
    }
    return solution
}


//Kadanes Algorithm
let kadanesAlgo = function(nums){
    let currentSum = nums[0];
    let maxSum = nums[0];
    for(let i = 1; i< nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}