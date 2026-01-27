/*
Given an array representing heights of vertical lines,
find the maximum area of water trapped between two lines.
*/

function containerWithMostWater(height){
    let left = 0;
    let right = height.length -1
    let maxArea = 0;
    while(left < right){
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maxArea
}