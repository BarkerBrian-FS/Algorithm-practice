//Top K Frequent Elements
function topKFrequent(nums, k){
    const freqMap = new Map();

    for(const num of nums){
        freqMap.set(num, (freqMap.get(num) || 0) +1)
    }

    const buckets = Array(num.length + 1).fill().map(() => []);

    for(const [num, freq] of freqMap.entries()){
        buckets[freq].push(num)
    }

    const result = [];

    for(let i = buckets.length - 1; i >= 0 && result.length < k; i--){
        if(buckets[i].length > 0){
            result.push(...buckets[i]);
        }
    }
    return result.slice(0, k);
}

//Majority Element

function majorityElement(nums){
    //create map to store number and frequency of it 
    const counts = new Map();
    //stores length of the array
    const n = nums.length;
    //iterates through nums making freq a 0 or adding one
    for(const num of nums){
        counts.set(num, (counts.get(num)||0) +1)
    }
    //loops through map counts.entries give array of key value pairs 
    for(const [num, count]of counts.entries()){
        //checks if numbers count greater than half array length
        if(count > n/2){
            return num 
        }
    }
}

//Single Number
function singleNumber(nums){
    //stores number and frequency it occurs
    const counts = new Map();
    //iterates though nums
    for(const num of nums){
        //sets number to 0 or adds 1 if already 0
        counts.set(num(counts.get(num)||0) +1)
    }
    // iterate through map entries returns array of key value
    for(const [num, count] of counts.entries()){
        //if equal to 1 return it 
        if(count === 1){
            return num 
        }
    }
}