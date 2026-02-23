//Top K frequent Elements
function topK(nums, k){
    const count = {};
    //step 1 frequency counter
    for(let num of nums){
        count[num] = (count[num]||0) +1
    }
    // step 2 sort by frequency 
    const sorted = Object.keys(count).sort((a,b) => count[b] - count[a])
    //Step 3 return top k sorted elements 
    return sorted.slice(0 , k).map(Number)
}

//Kth Largest Element in a Stream
/*
Design a class to find the kth largest integer in a stream of values, 
including duplicates. E.g. the 2nd largest from [1, 2, 3, 3] is 3. 
The stream is not necessarily sorted.
*/
class kthLargest{
    constructor(k, nums){
        this.k = k;
        this.nums = nums.sort((a,b) => b - a);
    }

    add(val){
        let i = 0;
        while(i < this.nums.length && this.nums[i] > val){
            i++
        }
        this.nums.splice(i, 0, val);
         return this.nums[this.k - 1];
    }
}