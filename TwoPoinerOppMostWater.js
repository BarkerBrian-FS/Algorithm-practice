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

//Merge alternately
/*
You are given two strings word1 and word2. 
Merge the strings by adding letters in alternating order, 
starting with word1. If a string is longer than the other, 
append the additional letters onto the end of the merged string.
Return the merged string.
*/
function mergeAlternate(word1, word2){
    let result = '';
    let i= 0;
    let j =0;

    while(i<word1.length && j<word2.length){
        result+=word1[i];
        result += word2[j];
        i++;
        j++;

    }
    while(i<word1.length){
        result+=word1[i];
        i++;
    }
    while(i<word2.length){
        result+=word1[j];
        j++;
    }
    return result;
}