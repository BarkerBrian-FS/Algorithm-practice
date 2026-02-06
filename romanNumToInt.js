function romanToInt(s){
    //function accepts a roman numeral
    //create map for all roman possibilities
    const map = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000

    };
    //make variable to hold total
    let total = 0;
    //iterate through roman numeral
    for(let i = 0; i < s.length; i++){
        // converts roman numeral string into numeric value
        const current = map[s[i]];
        //looks at next character and converts it too
        const next = map[s[i + 1]];
        //if current value smaller than next
        if(next && current < next){
            // Subtract from total
            total -= current;
            //Otherwise we add to total
        } else {
            total += current;
        }
    }
    //Return total after mathing 
    return total;
}