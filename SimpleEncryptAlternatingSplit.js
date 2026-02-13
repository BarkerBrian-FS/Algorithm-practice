/*
Implement a pseudo-encryption algorithm which given a string
 S and an integer N concatenates all the odd-indexed characters 
 of S with all the even-indexed characters of S, this process should be repeated N times.
*/

function encrypt(text, n){
    //edge case if no text or n is 0
    if(!text || n <= 0) return text;
    //loop through the array less than n times
    for(let i =0; i <n; i++){
        let oddChars = '';
        let evenChars = '';
        //loop through text
        for(let j = 0; j < text.length; j++){
        //find if even or odd 
        if(j % 2 === 0){
            evenChars += text[j]
            //if not even then odd and add
        } else{
            oddChars += text[j]
        }
    }
    //concat the characters 
    text = oddChars + evenChars
    }
    //return result
    return text
}