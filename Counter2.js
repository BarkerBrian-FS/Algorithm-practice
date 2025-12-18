//Counter 2 problem 

let createCounter = function(init) {

    let count = init;

    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    function reset(){
        count = init;
        return count;
    }
    return{
        increment,
        decrement,
        reset
    }
};