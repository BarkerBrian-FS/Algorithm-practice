/*
Given a string, return a new string with characters sorted by their frequency. 
Characters that appear more frequently should come first. When two characters have the same frequency, 
sort them alphabetically.
*/

function sortByFrequency(s){
    //Count Freq of characters
    const freq = new Map();
    for(const c of s){
        freq.set(c,(freq.get(c)||0)+1)
    }

    //Get Unique characters and sort
    const chars = Array.from(freq.keys());

    chars.sort((a,b) => {
        const freqDiff = freq.get(b) - freq.get(a);
        if(freqDiff !== 0){
            return freqDiff;
        }
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    });

    //Build result string 
    let result = "";
    for(const c of chars){
        result += c.repeat(freq.get(c));
    }
    return result
} 



