function longetConsec(strarr, k){
    //edge cases
    if(k<=0 || k >strarr.length) return "";
    //set empty string to hold longest string 
    let longest = "";
    //start looping through strings add -k starting to close to end 
    //and there wont be enough strings to take k consec
    for(let i =0; i < strarr.length-k; i++){
        //takes subarr of k consec strings starting at i
        const temp = strarr.slice(i, i+k).join('');
        //checks temp length against longest 
        if(temp.length > longest.length){
            //swaps longest with temp if longer
            longest = temp
        }
    }
    return longest 
}