//Converting hash code to array index

function simpleHash(s){
    let h = 0;
    for(let i =0; i < s.length; i++){
        h = (h + s.charCodeAt(i)) * 31;
    }
    return Math.abs(h);
}

let hashCode = simpleHash("Alice");  // Large number
let capacity = 10;

let index = hashCode % capacity;
console.log(`Index: ${index}`);  // Between 0-9
 