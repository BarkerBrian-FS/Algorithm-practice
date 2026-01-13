//brute force anagram 
function validAnagram(s, t) {
    let ssorted = s.split('').sort().join('');
    let tsorted = t.split('').sort().join('');
    if (ssorted === tsorted){
        return true
    }
    return false;
}

//one speedy boy
function ValidAnagram(s, t){
    //Check lengths are equal
    if(s.length !== t.length){
        return false
    }
    //create map for characters in words
    const charCount = new Map();
    //iterate through s and count character store in map 
    for(const char of s){
        charCount.set(char, (charCount.get(char)||0)+1)
    }
    //iterate through characters and subtract for everyone in t
    for(const char of t){
        if(!charCount.has(char)){
            return false
        }
        charCount.set(char, charCount.get(char)-1)
        if (charCount.get(char) <0){
            return false
        }
    }
    //return this if it is an anagram 
    return true
}