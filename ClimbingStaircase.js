function climbingStaircase(n){
    let numberOfSteps = [1,2];
    for (let i=2; i <= n; i++){
       numberOfSteps[i] =  numberOfSteps[i-1] + numberOfSteps[i-2]
    }
    return numberOfSteps(n - 1)
}