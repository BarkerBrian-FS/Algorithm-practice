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