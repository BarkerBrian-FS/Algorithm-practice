function isValid(s){
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for(let char of s){
        if(char === '('|| char === "{"|| char === "["){
            //push opening brackets onto stack 
            stack.push(char);
        }else{
            //if stack is empty or top doesnt match invalid
            if(stack.length === 0 || stack[stack.length -1] !== map[char]){
                return false
            }
            //matched , pop the top 
            stack.pop()
        }
    }
    //valid if no unmatched brackets remain 
    return stack.length === 0;
}