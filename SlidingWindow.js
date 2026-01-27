/*
Given an array (list) nums consisted of only non-negative integers, find the largest sum among all subarrays of length k in nums.

For example, if the input is nums = [1, 2, 3, 7, 4, 1], k = 3, 
then the output would be 14 as the largest length 3 subarray sum is given by [3, 7, 4] which sums to 14.

FIXED SLIDING WINDOW
*/

function subArraySumFixed(nums, k){
    let windowSum = 0;
    for(let i=0; i<k; i++){
        widowSum += nums[i];
    }
    let larget = windowSum;
    for(let right = k; right < nums.length; ++right){
        const left = right - k;
        windowSum -= nums[left];
        windowSum += nums[right];
        largest = Math.max(largest, windowSum)
    }
    return largest
}