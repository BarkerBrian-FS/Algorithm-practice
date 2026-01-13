/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

*/

function twoSumHash(arr, target){
    //create new hash map 
    const s = new Map();
    //iterate through every index of arr
    for (let i=0; i <arr.length; i++){
        // arr[i] is the number we need to complement to get target
        //s.has returns true if we has seen it 
        if(s.has(target-arr[i])){
            //gets index of compliment 
            return [s.get(target - arr[i]), i];
        }
        //adds current number index to map 
        s.set(arr[i],i)
    }
    //if no number return null
    return null
}