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