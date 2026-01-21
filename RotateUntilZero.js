function rotateLeftTillZero(nums){
    //use array as queue
    const queue = nums;
    //set while loop to check first number
    while(queue[0]!==0){
        //remove front number and add it to the end
        queue.push(queue.shift())
    }
    //return queue with zero first
    return queue
}