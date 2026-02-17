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