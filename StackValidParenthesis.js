/*
For this question we ask you to determine whether or not a string has valid parentheses. 
A string has valid parentheses if each bracket is closed and opened in the same order and has the same type. 
Parentheses has 3 types (), {} and []
*/

function validParentheses(s) {
    //create new stack
    const stack = [];
    //map of pairs to compare to s
    const pairs = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);
    //iterate through s
    for(let i=0; i< s.length; i++){
        //create variable for s at index
        const c = s.charat(i);
        // check to see if s at index is in pairs
        if(pairs.has(c)){
            //check to see if stack is > 0 and if top of stack and pairs match
            if(stack.length>0 && stack[stack.length-1]===pairs.get(c)){
                //if matching pop off stack
                stack.pop()
            }else {
                return false
            }
        }else {
            //push onto stack and wait for matching close
            stack.push(c)
        }
    }
    return stack.length === 0;
}

// 2 function palidrome for sentences
//make function to test for alphanumeric char
function isAlphanumeric(c){
    return /^[a-zA-Z0-9]*$/.test(c);
}

function isPalindrome(s){
    //start left at 0
    let l = 0;
    //start right at the end 
    let r = s.length - 1;
    // while left is less than right
    while(l < r){
        // while l less than right and left is not alphanumeric
        while(l < r && !isAlphanumeric(s.charAt(l))){
            l++;
        }
        // while l less than right and r is not alphanumeric
        while(l < r && !isAlphanumeric(s.charAt(r))){
            r--
        }
        // compare character at left and r lower cased if no match return false
        if(s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()){
            return false
        }
        //move forward with comparing
        l++
        r--
    }
    // all letters match return true 
    return true
}