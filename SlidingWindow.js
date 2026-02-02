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
        windowSum += nums[right];
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

/*
Let's continue on finding the sum of subarrays. 
This time given a positive integer array nums, 
we want to find the length of the shortest subarray such that the subarray sum is at least target. 
Recall the same example with input nums = [1, 4, 1, 7, 3, 0, 2, 5] and target = 10, 
then the smallest window with the sum >= 10 is [7, 3] with length 2. So the output is 2.
Flexible size sliding window

function slidingWindowFlexibleShortest(input) {
    initialize window, ans
    var left = 0;
    for (var right = 0; right < input.length; ++right) {
        append input[right] to window
        while (valid(window)) {
            ans = min(ans, window);   // window is guaranteed to be valid here
            remove input[left] from window
            ++left;
        }
    }
    return ans;
}

*/
function subArraySumShortest(nums, target){
    //make window sum variable
    let windowSum = 0;
    //start with +1 so that it is larger than any subarray possibility
    let length = nums.length+1;
    //make the left pointer at the beginning 
    let left = 0;
    //start moving thorough the array
    for(let right = 0; right < nums.length; right++){
        //add right index to sum
        windowSum += nums[right];
        while(windowSum >= target){
            //update length if window is smaller than previous sum
            length = Math.min(length, right - left+1)
            //shring window from the left looking for shorte sub array
            left ++
        }
    }
    //if length never update so subarray meet requirement
    if(length> nums.length){
        return 0;
    }
    //return shortest with sum >= target
    return length;
}

/*
A bunch of cards is laid out in front of you in a line, 
where the value of each card ranges from 0 to 10^6. 
A pair of cards is matching if they have the same number value.
Given a list of integers cards, your goal is to match a pair of cards, 
but you can only pick up cards in a consecutive manner. 
What's the minimum number of cards that you need to pick up to make a pair? 
If there are no matching pairs, return -1.
*/

function leastConsecutiveCardsToMatch(cards) {
    //make new map
    const window = new Map();
    //create left pointer
    let left = 0;
    //make shortest to compare later
    let shortest = cards.length + 1;
    //move through cards
    for (let right = 0; right < cards.length; ++right) {
        //if card new make zero if present add 1
        window.set(cards[right], (window.get(cards[right]) ?? 0) + 1);
        //once match is found 
        while (window.get(cards[right]) === 2) {
            //shrink from left to make as short as possible update shortest window
            shortest = Math.min(shortest, right - left + 1);
            //remove left most card from window
            window.set(cards[left], window.get(cards[left]) - 1);
            ++left;
        }
    }
    //if shortest updated return length if no duplicates return -1
    return shortest !== cards.length + 1 ? shortest : -1;
}

/*
Given an array of integers arr and a target value, find a subarray that sums to the target. 
Return the start and end indices of the subarray.
PREFIX SUM
*/
function subArraySum(arr, target){
    //initiate map to hold sum and index
    const prefixSum = new Map([0,0]);
    //make curSum to store current sum of all indexes
    let curSum = 0;
    //loop through the array
    for(let i=0; i < arr.length; i++){
        //add each index to the sum while moving 
        curSum += arr[i];
        //subtract current sum from target to see what is needed
        const complement = curSum - target;
        //check map to find complement
        if(prefixSum.has(complement)){
            //return complement and index + 1
            return [prefixSum.get(complement), i+1];
        }
        // set the current sum and index to the map
        prefixSum.set(curSum, i+1)
    }
    //return empty array if no answer found
    return []
}

//Longest Substring without repeat

function longest_substring_without_repeating_characters(s){
    //longest string without repeat
    let longest = 0;
    //make window to hold all indexes
    const window = new Set();
    //make left pointer
    let l = 0;
    //start moving window with for loop
    for(let right = 0; right <s.length; right++){
        //check if index is already in window
        while(window.has(s[right])){
            //delte chacter on left
            window.delete(s[l])
            //move left pointer
            ++l
        }
        //add new character on right
    window.add(s[right]);
        //check against previous substring
    longest = Math.max(longest, right - l + 1)
    }
    //return the answer
    return longest
}

