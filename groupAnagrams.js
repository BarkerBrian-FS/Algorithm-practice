//Brute Force
function groupAnagrams (strs){
    let cache = {};
    for(let str of strs){
        let sortedKey = str.split('').sort().join('');
        (!cache[sortedKey]) ? cache[sortedKey] = str : cache[sortedKey].push(str)
    }
    return Object.values(cache);
}

//Optimized
function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    const count = Array(26).fill(0);
    for (const char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    const key = count.join('#'); // create a string key from frequency array
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }

  return Array.from(map.values());
}

//group anagram using split sort join

function groupAnagrams(strs){
  const map = new Map();

  for(const word of strs){
    const key = word.split('').sort().join('');

    if(!map.has(key)){
      map.set(key, [])
    }
    map.get(key).push(word)
  }
  return Array.from(map.values())
}

//advanced group anagrams
function groupAnagrams(strs){
  const map = new Map();

  for(const word of strs){
    //create freq array for 26 letters
    const count = new Array(26).fill(0);

    //loop through words and create character code
    for(const char of word){
      count[char.charCodeAt(0) -97]++;
    }
    //convert to string key
    const key = count.join(',');

    //check if map doesnt have key
    if(!map.has(key)){
      //set key in map 
      map.set(key, []);
    }
    //push word to corresponding key
    map.get(key).push(word)
  }
  //make an array from the map 
  return Array.from(map.values());
}