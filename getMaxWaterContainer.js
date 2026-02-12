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