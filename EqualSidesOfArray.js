/*
You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return -1.
*/

function findEvenIndex(arr){
    //calculate the total sum of the entire array
    const totalSum = arr.reduce((sum, num)=> sum + num, 0);
    //make variable to store leftSum
    let leftSum = 0;
    //loop through array
    for(let i = 0; i < arr.length; i++){
        //subtract leftSum from totalSum to get right
        const rightSum = totalSum - leftSum - arr[i];
        //if they equal return i
        if(leftSum === rightSum){
            return i;
        }
        //if not add another sum to left
        leftSum += arr[i];
    }
    //no answer return -1
    return -1;
}