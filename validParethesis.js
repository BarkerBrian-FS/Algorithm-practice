function isValid(s){
    const stack = [];
    const map = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    for(char of s){
        if(char === '('|| char ==='{' || char ==='['){
            stack.push(char)
        } else{
            if(stack.pop !== map[char]){
                return false
            }
        }
    }
    return stack.length === 0;
}