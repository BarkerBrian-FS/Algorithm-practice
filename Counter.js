// Counter problem 
let createCounter = function(n){
    return function(){
        return n++
    }
}

const counter = createCounter(10)

