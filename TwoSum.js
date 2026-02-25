// Brute Force
let twoSum = function(nums, target){
    let res = []
    for(let i =0; i < nums.length; i++){
        for(let j= i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                res.push(i, j)
            }
        }
        return res
    }
}

//Optimised
let twoSumOpt = function(nums, target){
    let storage = {};

    for(let [index,num] of nums.entries()){
        if(storage[num] !== undefined) return [storage[num], index];
        storage[target-num] = index;
    }
}

// Two Sum Sorted

function twoSumSorted(arr, target){
    //set left pointer to first index
    let l = 0;
    //set right to last index
    let r = arr.length -1;
    // while l < r move through array 
    while(l < r){
        // set twosum to sum of l and r
        const twoSum = arr[l] + arr[r];
        //check if two sum is target
        if (twoSum === target){
            //return l and r 
            return [l ,r];
        } 
        //check if less than target
        if(twoSum < target){
            //move left further down
            l++
            //if greater than target sub r
        }else {
            r--
        }
    }
    return []
}

//TwoSum using map 

function twoSum(nums, target){

    //map to store number
    const numToIndex = new Map();

    //Iterate though the array with index and value
    for(let i= 0; i < nums.length; i++){
        const num = nums[i];
        const complement = target - num;

        //Check if complement exists in map 
        if(numToIndex.has(complement)){
        
        return [numToIndex.get(complement, i)]
    }
    //store current number and index for future lookup
    numToIndex.set(num, i);

    }
}

//TwoSum using class
class Solution {
  twoSum(nums, target) {
    const numToIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (numToIndex.has(complement)) {
        return [numToIndex.get(complement), i];
      }

      numToIndex.set(nums[i], i);
    }
  }
}


// Two Sum with Hash Map

function twoSum(arr, target){
    //create map 
    const s = new Map();
    //loop through array
    for(let i = 0; i < arr.length; i++){
        //see if arr has left over number to make target
        if(s.has(target - arr[i])){
            // return the number 
            return [s.get(target-arr[i]), i]
        }
        //set it into the map 
        s.set(arr[i], i)
    }
    //return null if no answer found
    return null;
}

//ThreeSum 
function threeSum(nums){
    const res = [];
    //sort array 
    nums.sort((a, b) => a - b);

    for(let  i = 0; i < nums.length -2; i++){
        //skip duplicates
        if(i > 0 && nums[i] === nums[i -1]) continue;

        let left = i + 1;
        let right = nums.length -1;

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];

            if(sum === 0){
                res.push(nums[i], nums[left], nums[right]);
                //skip duplicates left
                while(left < right && nums[left] === nums[left - 1]) left++;
                //skip duplicates right
                while(left < right && nums[right] === nums[right - 1]) right--;

                left++
                right--
            }else if(sum < 0){
                left++
            } else {
                right--
            }
        }
    }
    return res
}