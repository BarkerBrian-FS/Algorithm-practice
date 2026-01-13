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
 

// Create empty hash table
let phoneBook = new Map();

// Insert key-value pairs
phoneBook.set("Alice", "555-1234");
phoneBook.set("Bob", "555-5678");
phoneBook.set("Carol", "555-9012");

// Lookup by key
console.log(phoneBook.get("Alice"));  // "555-1234"

// Check if key exists
if (phoneBook.has("Bob")) {
    console.log("Found Bob");
}

// Delete a key
phoneBook.delete("Carol");

// Get with default
let number = phoneBook.get("Dave") || "Not found";