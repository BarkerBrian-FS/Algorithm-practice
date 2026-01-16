/*
Given two arrays arr1 and arr2, sort arr1 so that the elements appear in the same relative order as they appear in arr2. 
Elements that don't appear in arr2 should be placed at the end in ascending order.

Input: Two arrays of integers

arr1: Array to be sorted
arr2: Array defining the ordering
Output: Array arr1 sorted according to the order in arr2
*/

function relativeSortArry(arr1, arr2){
    //Create a map of elements in arr2
    const orderMap = new Map();
    arr2.forEach((val,i) => orderMap.set(val, i));
    
    return arr1.sort((a,b)=>{
        const aInArr2 = orderMap.has(a);
        const bInArr2 = orderMap.has(b);

        if(aInArr2 && bInArr2){
            return orderMap.get(a) - orderMap.get(b);
        } else if(aInArr2){
            return -1
        } else if(bInArr2){
            return 1
        } else {
            return a - b
        }
    })
}