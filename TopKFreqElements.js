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