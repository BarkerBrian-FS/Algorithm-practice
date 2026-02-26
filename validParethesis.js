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

//Concise Version 

function isValid(s){
    let stack = [];
    let map ={')':'(', '}':'{', ']':'['};

    for(let char of s){
        if(map[char]){
            // char is a closing bracket
            if(stack.pop() !== map[char]) return false;
        } else {
            //char is an opening bracket
            stack.push(char)
        }
    }
    return stack.length === 0;
}