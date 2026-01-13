// Create empty set
let numbers = new Set();

// Add elements (duplicates ignored)
numbers.add(1);
numbers.add(2);
numbers.add(2);  // Duplicate, ignored
numbers.add(3);
numbers.add(1);  // Duplicate, ignored

console.log(numbers);  // Set {1, 2, 3}

// Check membership - O(1)
if (numbers.has(2)) {
    console.log("Found 2");
}

// Remove element
numbers.delete(2);

// JavaScript `Set` uses `.add()`, `.has()`, and `.delete()`.

let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4]);
//Union
let union = new Set ([...a,...b]);
console.log(union);  // Set {1, 2, 3, 4}

//Intersection
let intersection = new Set ([...a].filter(x => b.has(x)));
console.log(intersection);  // Set {2, 3}

let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);  // Set {1}