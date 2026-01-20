/*
Given an array of numbers, determine if the array can make an arithmetic progression after rearranging its elements.

An arithmetic progression is a sequence where the difference between consecutive terms is constant. For example, [1, 3, 5, 7] is an arithmetic progression with a common difference of 2.
*/

function canMakeArithmeticProgression(arr){
    //check length of array
    if(arr.length <= 2){
        return true
    }
    //sort array in ascending order
    arr.sort((a,b) => a-b);
    //check difference between first 2 places
    const diff = arr[1] - arr[0];
    //start for loop at second postion and iterate
    for(let i=2; i < arr.length; i++){
        //check difference between the res of the array
        if(arr[i] - arr[i-1]!== diff){
            //return false if difference dont match
            return false
        }
    }
    //return true if they do 
    return true
}