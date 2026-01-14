/*
Given a string s, repeatedly remove all adjacent duplicate characters until no more duplicates can be removed. 
Return the final string after all removals.
When you remove a pair of adjacent duplicates, 
the remaining characters on both sides may become adjacent and form new duplicates that also need to be removed.
*/

function findDuplicates(s){
    //create stack for characters not yet eliminated
    const stack = [];
    //iterate through s 
    for(const char of s){
        //compare top of stack to current char
        if(stack.length>0 && stack[stack.length-1] === char){
            //if it matched pop char off of stack
            stack.pop();
        }else{
            //if no dup push character onto stack
            stack.push(char);
        }
        //join the stack and return the answer
        return stack.join('');
    }
}