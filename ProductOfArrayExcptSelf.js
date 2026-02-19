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

//Maximum / Minimum Subarray / Window

function maxMinSubArr(nums, k){
    let n = nums.length;
    //edge case length smaller than provided window
    if(n < k) return null;

    let windowSum = 0;
    //compute sum of first window
    for(let i = 0; i < k; i++){
        windowSum += nums[i];
    }
    //set max to current window
    let maxSum = windowSum;
    //move window forward
    for(let i = k; i < n; i++){
        //calculate new window sum
        windowSum += nums[i] - nums[ i-k ];//add new element remove oldest
        //check which is larger
        maxSum = Math.max(maxSum, windowSum)
    }
    //return largest
    return maxSum;
}