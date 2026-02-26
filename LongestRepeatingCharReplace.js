function charReplace(s, k){
    const count = {};
    //start of the window
    let left = 0;
    let maxCount = 0;
    let maxLength = 0;
    //expand window one index at a time left => right
    for(let right = 0; right< s.length; right++){
        //stores char at right pointer
        const char = s[right];
        //increment freq of chars in window
        count[char] = (count[char]||0) + 1;
        //compare and switch if necessary 
        maxCount = Math.max(maxCount, count[char]);
        //r-l+1-m length of curr window if num exceed k window not valid must shrink 
        while((right - left + 1) - maxCount >k){
            //reduce freq at left
            count[s[left]]--;
            //shrink window 
            left++
        }
        //update max valid substring length
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}