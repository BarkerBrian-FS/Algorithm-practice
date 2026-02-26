function maxArea(heights){
    //make left and right pointers
    let left = 0;
    let right = heights.length-1;
    //variable to hold maxArea
    let maxArea = 0;

    //while left and right not touching 
    while(left < right){
        //find smallest height between pointers
        const height = Math.min(heights[left], heights[right]);
        //determine width by subtracting heights
        const width = right - left;
        //determine area 
        const area = height * width;
        //compare and swap max area
        maxArea = Math.max(maxArea, area)

        //find lowest height and move pointers
        if(height[left] < heights[right]){
            left++
        } else {
            right--
        }
    }
    //return answer
    return maxArea
}