/*
Given an array of non-negative integers, arrange them to form the largest possible number. 
The result should be returned as a string.
Input: An array of non-negative integers
Output: A string representing the largest number that can be formed by concatenating the array elements in some order
*/

function largestNumberFromArray(nums){
    //turn all numbers into strings
    const strNums = nums.map(num => String(num))
    //sort numbers
    strNums.sort((a,b)=> {
        //make variable for each combination
        const order1 = a + b;
        const order2 = b + a;
        // when return neg num a comes before b
        if(order1 > order2) return -1
        // when return pos num b before a
        if(order2 > order1) return 1
        return 0
    });
    // handle edge cases for zeros
    if(strNums[0] ==='0'){
        return '0';
    }
    //Join the number strings together
    return strNums.join('')
}