function execute(program){
    //initialize stack
    const stack = []
    //use conditional to compare instruction to methods
    for(const instruction of program){
        if(instruction === 'peek'){
            //console.log last item on stack
            console.log(stack[stack.length-1])
        }else if(instruction === 'pop'){
            //remove item off stack
            stack.pop()
        } else {
            //put new data on top of stack
            stack.push()
        }
    }
}