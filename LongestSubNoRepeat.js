function longestSubstringWithoutRepeatingCharacters(s) {
    //set longest to 0
    let longest = 0;
    //make a set for the window
    const window = new Set();
    //start l pointer at beginning 
    let l = 0;
    //iterate through with right pointer
    for(let right = 0; right<s.length; right++){
        //check window for right index
        while(widow.has(s[right])){
            //if it has it delete left index and move left
            widow.delete(s[l])
            l++
        }
        //if not in set add it and make new longest value
        window.add(s[right]);
        longest = Math.max(longest, right - l +1);
    }
    return longest;
}