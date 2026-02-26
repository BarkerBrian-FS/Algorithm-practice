function longestSubstringWithoutRepeatingCharacters(s) {
    //use set as window 
    let set = new Set();
    // make left pointer
    let left = 0;
    let maxLength = 0;
    //iterate through s 
    for(let right =0; right < s.length; right++){
        //check if left same as right
        while(set.has(s[right])){
            //if same delete left
            set.delete(s[left])
            //move left forward
            left++
        }
        //add right into set 
        set.add(s[right])
        //compare length and change if necessary
        maxLength = Math.max(maxLength, right - left +1)
    }
    return maxLength
}