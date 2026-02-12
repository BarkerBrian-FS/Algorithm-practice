function firstNonRepeatChar(s){
    //create map to store characters
    let counts = new Map()
    //loop through characters
    for(let char of s){
        //make character lowercase
        const lower = s.toLowerCase()
        //set characters to map and set count or add one for duplicates
        counts.set(lower,(counts.get(lower)||0)+1)
    }
    //loop through map checking for char with 1 count
    for(let char of s){
        if(counts.get(char.toLowerCase())===1)
            //return char with no duplicates 
            return char
    }
    //if nothing works return empty string 
    return "";
}