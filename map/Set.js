//Set 

//Contains Duplicate
function containsDuplicate(nums){
    const seen = new Set();

    for(let num of nums){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

//Longest Consec Sequence
function longestConsec(nums){
    const set = new Set();
    let longest = 0;

    for(let num of nums){
        if(!set.has(num -1)){//start sequence
        let length = 1;

        while (set.has(num + length)){
            length++
        }
        longest = Math.max(longest, length)
    }
}
return longest;
}

//Map crash course

//Frequency Counter Pattern
function countChar(str){
    const map = new Map();

    for(let char of str){
        map.set(char, (map.get(char)||0) +1) //this line is a key value pair
    }
    return map 
}

//map patter Two Sum
function twoSum(nums, target){
    const map = new Map();

    for (let i=0; i< nums.length; i++){
        const complement = target - nums[i]

        if(map.has(complement)){
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}

//Map Pattern Grouping
function groupByLength(words){
    const map = new Map();

    for(let word of words){
        //store word length as key
        const key = word.length;
        //check if key exists 
        if(!map.has(key)){
            //if no key set key and array for word
            map.set(key, []);
        }
        //get the key and push word into array
        map.get(key).push(word)
    }
    //transform map into array and return all 
    return Arrray.from(map.values())
}