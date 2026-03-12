function walk(maze, wall, curr, end, seen, path){
    //out of bounds
    if(
        curr.x < 0||
        curr.y < 0||
        curr.y >= maze.length||
        curr.x >= maze[0].length
    ){
        return false;
    }
    
    //on a wall
    if(maze[maze.y][maze.x] === wall){
        return false;
    }
    //already seen
    if(seen[curr.y][curr.x]){
        return false
    }

    if(curr.x === end && curr.y === end){
        path.push(curr);
        return true;
    }

    //mark seen
    seen[curr.y][curr.x] = true;
    //pre operation
    path.push(curr);

    const dirs = [
        {x: 1, y: 0}, //right
        {x: -1, y: 0}, //left
        {x: 0, y: 1}, //down
        {x: 0, y: -1} //up
    ];
    //recurse
    for(let dir of dirs){
        if(
            walk(
                maze,
                wall, 
                {x: curr.x + dir.x, y: curr.y + dir.y},
                end,
                seen,
                path
            )
        ){
            return true;
        }
    }
    //post operation
    path.pop();

    return false;
}

function solve(maze, wall, start, end){
    const seen = [];

    for(let i =0; i < maze.length; i++){
        seen.push(new Array(maze[0].length).fill(false))
    }

    const path = [];

    walk(maze, wall, start, end, seen, path);

    return path;
}