function threeSum(nums){
    const result = [];
    //sort nums first
    nums.sort((a, b)=> a-b);

    for(let i=0; i < nums.length -2; i++){
        //skip duplicates
        if(i > 0 && nums[i]===nums[i - 1]) continue;
        //set left and right pointer
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            //add 3 nums to make sum 
            const sum = nums[i] + nums[left] + nums[right];
            //check if sum is equal to 0
            if(sum === 0){
                //if it is push to result 
                result.push(nums[i], nums[left], nums[right])
                //move pointers
                left++
                right--
                //is sum less move left forward 
            } else if (sum < 0){
                left++
            } else {
                //if sum more move right back 
                right--
            }
        }
    }
    return result;
}