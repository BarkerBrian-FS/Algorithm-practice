/*
Practice using sets to find duplicate elements in the exercise below.

Problem: Given a list of integers, find all numbers that appear more than once.
*/

function findDuplicates(arr){
    let seen = new Set();
    let duplicate = new Set();
    for(const num of arr){
        if(seen.has(num)){
            duplicate.add(num)
        } else{
            seen.add(num)
        }
    }
    return Array.from(duplicates).sort((a,b)=> a-b)
}

//Given an array of integers, determine if it contains any duplicate values. Return true if at least one value appears more than once, false otherwise.

function duplicatesExsist(nums){
    const seen = new Set(nums);
    for (let num of nums){
       if(seen.has(num)){
        return true
       }
       seen.add(num)
    }
    return false
}