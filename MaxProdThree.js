/*
Given an integer array, find the maximum product of any three numbers.
This problem demonstrates why sorting helps reveal the solution structure. 
With negative numbers in the array, the maximum product isn't always the three largest numbers.
*/

function maxProductOfThree(nums) {
    //sort array in ascending order
    nums.sort((a,b)=> a-b);

    let n = nums.length;
    // caculate the products found in the array 
    // all three largest number chosen and two largest negative and largest number chosen 
    let product1 = nums[n-1] * nums[n-2]* nums[n-3];
    let product2 = nums[0] * nums[1] * nums[n-1];
    //math max compares and returns largest product
    return Math.max(product1, product2)
}
