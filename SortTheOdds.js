/*
You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/

function sortTheOdds(arr){
    //make array to hold odds
    let odds = [];
    //loop through array
    for(let i = 0; i < arr.length; i++){
        //check if array index is odd
        if (arr[i] % 2 !==0){
            //if odd push to odds array
            odds.push(arr[i])
        }
    }
    //use bubble sort to rearrange odds in ascending order
    for(let i = 0; i <odds.length; i++){
        for(let j = 0; j < odds.length; j++){
            if(odds[j] > odds[j + 1]){
                [odds[j], odds[j + 1]] = [odds[j + 1], odds[j]]
            }
        }
    }
    //put odds back into array 
    //create pointer for odds array
    let oddIndex = 0;
    //loop through original array 
    for(let i = 0; i < arr.length; i++){
        //find original odd positions 
        if(arr[i] % 2 !== 0){
            //if position had odd insert odd from odds array
            arr[i] = odds[oddIndex]
            //move pointer forward in odds array
            oddIndex++
        }
    }
    return arr;
}