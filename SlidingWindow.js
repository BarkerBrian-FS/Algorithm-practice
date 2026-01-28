/*
Given an array (list) nums consisted of only non-negative integers, find the largest sum among all subarrays of length k in nums.

For example, if the input is nums = [1, 2, 3, 7, 4, 1], k = 3, 
then the output would be 14 as the largest length 3 subarray sum is given by [3, 7, 4] which sums to 14.

FIXED SLIDING WINDOW
*/

function subArraySumFixed(nums, k){

    let windowSum = 0;
    //loop through first k elements
    for(let i=0; i<k; i++){
        //add all elements for the sum
        windowSum += nums[i];
    }
    let largest = windowSum;
    //slide the window through the rest of the array 
    for(let right = k; right < nums.length; ++right){
        //left is always k positions from the right 
        const left = right - k;
        //substract what leaves the window
        windowSum -= nums[left];
        //add what enters the window
        windowSum += nums[right];
        //compare and change largest
        largest = Math.max(largest, windowSum)
    }
    return largest
}

/*
Recall finding the largest size k subarray sum of an integer array in Largest Subarray Sum. 
What if we don't need the largest sum among all subarrays of fixed size k, but instead, 
we want to find the length of the longest subarray with sum smaller than or equal to a target?
LONGEST SUB ARRAY 
*/
function subarraySumLongest(nums, target){
    let windowSum = 0;
    let length = 0;
    let left = 0
    for(let right=0; right < nums.length; right++){
        widowSum += nums[right];
        while(windowSum > target){
            windowSum -= nums[left];
            ++left;
        }
        length = Math.max(length, right-left+1);
    }
    return length;
}


/*
Longest Substring without Repeating Characters
Find the length of the longest substring of a given string without repeating characters.
*/

function longestSubstringWithoutRepeat(s){
    //instantiate longest variable to compare
    let longest = 0;
    //make window 
    const window = new Set();
    //make left pointer
    let l = 0;
    //move the window
    for(let right = 0; right<s.length; ++right){
        //check and see if window has right index
        while(window.has(s[right])){
            //if present delete the left one 
            window.delete(s[l])
        }
        //if not present add the right
        window.add(s[right]);
        //compare to see if it is the longest substring without repeat
        longest = Math.max(longest, right - l + 1)
    }
    //return answer
    return longest
}