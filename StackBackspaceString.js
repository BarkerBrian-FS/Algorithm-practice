/*
Given two strings s and t containing lowercase letters and backspace characters (represented by #), 
determine if they are equal after processing all backspaces. 
A backspace character deletes the previous character.
*/

function backSpaceDup(s, t){
    function buildStr(str){
        //creates stack to hold not yet eliminated characters
        const stack = [];
        // iterates through chars in string
        for(const char of str){
            //if not backspace symbol push to stack
            if(char!== '#'){
                stack.push(char);
                //if backspace symbol and stack not empty pop off stack
            }else if (stack.length > 0){
                stack.pop();
            }
        }
        //join the stack together and return it
        return stack.join('')
    }
    //compare both strings coming out of the function
    return buildStr(s) === buildStr(t)
}