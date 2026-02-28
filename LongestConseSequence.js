function longestConsec(nums){
    //make set to hold sequence
    const set = new Set(nums)
    let longest = 0;

    for(const num of set){
        //only start if beginning of sequence
        if(!set.has(num - 1)){

            let length = 1;
            let current = num;
            //check if next num available 
            while(set.has(current +1)){
                //if available increase current and length
                current++
                length++
            }
            //compare to longest and switch if necessary 
            longest = Math.max(longest, length);
        }
    }
    return longest;
}