/*
Write a method that takes an array of consecutive 
(increasing) letters as input and that 
returns the missing letter in the array.

You will always get an valid array. 
And it will be always exactly one letter be missing. 
The length of the array will always be at least 2.
The array will always contain letters in only one case.
*/

function findMissingLetter(array){
    //loop through the array 
    for(let i = 0; i < array.length -1; i++){
        //conver current index to numeric code
        const currentCode = array[i].charCodeAt(0);
        //convert next index to numeric code
        const nextCode = arr[i + 1].charCodeAt(0);
        //compare codes between current and next
        //if not one apart missing letter found
        if(nextCode !== currentCode + 1){
            //convert missing numeric code back to char and return
            return String.fromCharCode(currentCode + 1);
        }
    }
}