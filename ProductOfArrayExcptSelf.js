//Product of array except self
function productExceptSelf(nums){
    const n = nums.length;
    //create and output array and fill with 1s
    const answer = new Array(n).fill(1);

    let prefix = 1;
    answer[i] = prefix;
    prefix *= nums[i];

    let suffix = 1;
    for(let i = n - 1; i >= 0; i--){
        answer[i] = suffix;
        suffix *= nums[i];
    }
    return answer;
}

//Running sum of 1d array
function runningSum(){
    //store length of arr
    const n = nums.length;
    //make array to store running sums
    const runningSumArr = new Array(n);
    //loop through nums
    for(let i=0; i < n; i++){
        //for first element the running sum is the element itself
        if(i === 0){
            runningSumArr[i] = nums[i];
            //for other elements add the previous to the current element
        }else{
            runningSumArr[i] = runningSumArr[i - 1] + nums[i]
        }
    }
    //return the final array
    return runningSumArr;
}