function longestPalindrome(s){
    //if string in one character or empty return 
    if(s.length < 2) return s
    //create starting pointer
    let start = 0;
    //create max length to compare later
    let maxLength = 1;
    //this helper function will shorten from left and lengthen right
    function expand(left, right){
        //make sure left and right within boundaries
        //sleft === sright is the palindrome check if char same sub between palindrome
        //no match breaks the loop
        while(left >= 0 && right < s.length && s[left]===s[right]){
            left --;
            right++;
        }
        //returns palindrome length 
        //substract 1 since left and right outside palindrome
        return right - left - 1;
    }
    //test all chars in middle test them
    for(let i = 0; i < s.length; i++){
        //center is single char racecar
        const oddLength = expand(i, i);
        //center between 2 char abba
        const evenLength = expand(i, i+1);
        //pick longer palindrome
        const length = Math.max(oddLength, evenLength);
        // only update if longer palindrome found
        if(length > maxLength){
            //store new best length
            maxLength = length;
            //how far palindrome extends to left of center
            start = i - Math.floor((length - 1)/2)
        }
    }
    // extracts longest palindrome 
    return s.substring(start, start + maxLength);
}