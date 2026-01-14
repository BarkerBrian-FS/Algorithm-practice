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