/*
Given an array of strings tokens representing a valid Reverse Polish Notation (RPN) expression, evaluate it and return the result.

In Reverse Polish Notation, operators come after their operands. For example, the expression (2 + 1) * 3 in standard notation becomes 2 1 + 3 * in RPN.

The valid operators are +, -, *, and /. Division between integers truncates toward zero.
*/

function evalRpn(tokens){
    const stack = [];
    //iterate through the tokens
    for(const token of tokens){
        if(token === '+'){
            //pop off operands
            const b = stack.pop();
            const a = stack.pop();
            //apply operation push result back
            stack.push(a+b);
        }
        else if(token === '-'){
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a-b);
        }
        else if(token === '*'){
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a*b);
        }
        else if(token === '/'){
            const b = stack.pop();
            const a = stack.pop();
            //Math.trunc rounds toward 0
            stack.push(Math.trunc(a/b));
        } else{
            //converts strings into integers and pushes into stack
            stack.push(parseInt(token));
        }
    }
    //return the final answer 
    return stack.pop()
}