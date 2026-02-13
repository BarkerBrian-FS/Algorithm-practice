function fibonacci (n){
    const fib = [0,1];
    for (let i =2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}


console.log(fibonacci(10))

//Big O = O(n)

//Product of Consec Fib Nums

function productFib(prod){
    //F(n)
    let a = 0;
    //F(n+1)
    let b = 1;
    //while current fib num less than product
    while (a * b < prod){
        //next fib sequence
        const next = a+b;
        //become previous F(n+1)
        a = b;
        // becomes next new fib num
        b = next;
    }
    //returns arrays of nums used and boolean 
    return [a, b, a * b === prod]
}


//Tribonacci sequence
//signature is array of 3 nums to start sequence
//n is the num of elements to return
function tribonacci(signature, n){
    //edge case for n = 0 
    if(n === 0 ) return [];
    //edge case for less than 3 in signature
    if(n <= 3) return signature.slice(0,n);
    //recursive call to get first n - 1 nums of sequence
    const prev = tribonacci(signature, n -1);
    //calculate the next number in the sequence
    const next = 
    prev[prev.length - 1] +
    prev[prev.length - 2] +
    prev[prev.length - 3];
    //add new trib numbers to end of array
    prev.push(next);

    return prev;
}