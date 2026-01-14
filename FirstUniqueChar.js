/*
Given a string s, find the index of the first character that appears exactly once. If no such character exists, return -1.
*/

function firstUnique(s){
    //creates map to store characters and count
    let charCount = new Map();
    //iterates through arr sets count for all letters in array
    for (const char of s){
        charCount.set(char, (charCount.get(char)||0)+1);
    }
    //second iteration through already mapped arr
    for(let i = 0; i <s.length; i++){
        //checks if char only occurs once and returns it
        if(charCount.get(s[i])=== 1)
            return i
    }
    return -1
}