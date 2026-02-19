function numIslands(grid){
    //edge case if grid null or no rows return 0
    if(!grid || grid.length === 0)return 0;
    //count for the islands
    let count = 0;
    //helper function takes row and column
    function dfs(r, c){
        if(
            //checks if we went above grid
            r < 0 ||
            //checks if we went left of grid
            c < 0 ||
            //checks if we went below grid
            r >= grid.length ||
            //checks if we went right of grid
            c >= grid[0].length ||
            //checks if water or visited
            grid[r][c] === 0
        ){
            return;
        }
        //prevent double counting by changing 1 to 0
        grid[r][c] === 0;

        //explore neighbors using recursion 
        // check all directions from start
        dfs(r + 1, c) //down
        dfs(r - 1, c) //up
        dfs(r, c + 1) //right
        dfs(r, c - 1) //left 
    }
    //loops through all rows
    for(let r = 0; r < grid.legth; r++){
        //loop through all columns
        for(let c = 0; c < grid.length; c++){
            //if land found 
            if(grid[r][c] === 1){
                //increse island count
                count++
                //use dfs to turn 1 to 0
                dfs(r, c)
            }
        }
    }
    return count;
}