/*
Given an array of integers, count how many times each number appears. Return a hash map where keys are the numbers from the array and values are their frequencies.
*/

function countFrequencies(arr){
    //make new map
    let freq = new Map()
    //loop through array to each num
    for(let num of arr){
        //use methods to set freqCount to 0 or add 1
        freq.set(num, (freq.get(num)||0) +1)
    }
    //return the count
    return freq
}