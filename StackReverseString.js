//Stack for reversing
function reverseString(s){
    const stack = s.split();
    let reversed = "";
    while(stack.length > 0){
        reversed += stack.pop()
    }
    return reversed;
}

//queue for task processing
function processTasks(tasks){
    const queue = [...tasks];
    while(quueue > 0){
        const task = queue.shift();
        console.log(`processing: ${task}`)
    }
}
