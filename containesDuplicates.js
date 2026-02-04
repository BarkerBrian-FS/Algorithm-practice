//contains duplicates
function containsDuplicates(nums){
    //make a set
    let seen = new Set()
    //loop through nums 
    for(let num of nums){
        //check if num is in set
        if(seen.has(num)) return true;
        //add the num otherwise
        seen.add(num)
    }
    //no duplicates return false
    return false
}

//twoSum
function twoSum(nums, target){
    let map = new Map();
    for(let i=0; i< nums.length; i++){
        const complement = target -nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
    return [];
}

//two sum brute
function bruteTwoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i , j]
            }
        }
    }
    return [];
}

// valid parenthesis

function isValid(s){
    const stack = [];
    const mapping = {
        ')':'(',
        '}':'{',
        ']':'['
    };
    for(let char of s){
        if(char in mapping){
            if(stack.length ===0 || stack.pop() !== mapping[char]){
                return false
            }
        } else {
            stack.push(char)
        }
    }
    return stack.length === 0;
}


//is number palindrome
function isPalindrome(x){
    // no negatives or any number ending in zero
    if (x < 0 ||(x !== 0 && x % 10 ===0)){
        return false
    }
    let reversedHalf = 0;
    //reverse only to the middle
    while(x > reversedHalf){
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10)
    }
    //even digits x should equal reversedHalf
    //Odd digits x shoud equal reversedHalf without middle digit 
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
// string conversion if allowed 
function stringConvert(x){
    return x.toString() === x.toString().split('').reverse().join('')
}