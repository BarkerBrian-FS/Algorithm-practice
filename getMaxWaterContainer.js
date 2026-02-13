function getMaxWaterContainer(heights){
    //set variable to hold maxArea
    let maxArea = 0;
    //instantiate first pointer 
    for(let p1 = 0; p1 < heights.length; p1++){
        //instantiate second pointer
        for(let p2 = p1+1; p2 < heights.length; p2++){
            // find height of the current area
            const height = Math.min(heights[p1], heights[p2]);
            //find width of current area 
            const width = p2 - p1;
            // find area between current points 
            const area = height * width;
            //check if current area larget than max
            maxArea = Math.max(maxArea, area)
        }
    }
    //return largest 
    return maxArea 
}

//get max container optimized

function getMaxContainer(heights){
    //make first pointer at beginning 
    let p1 = 0
    //make second pointer at end
    let p2 = heights.length - 1
    //make area variable for largest
    let maxArea=0
    //while first pointer less than second
    while(p1 < p2){
        //find largest height between both pointers
        const height = Math.min(heights[p1] - heights[p2]);
        //subtract indexes to find width
        const width = p2 - p1;
        //find area between heights
        const area = height * width;
        //check if area larger than max area and switch 
        maxArea = Math.max(maxArea, area)
        //if still room available move pointers 
        if(heights[p1] <= heights[p2]){
            p1++
        } else{
            p2--
        }
        return maxArea
    }
}