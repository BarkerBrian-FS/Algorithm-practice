const numIslands = (grid) => {
    let countIslands = 0;

    for(let rowIndex in grid){
        for (let colIndex in grid[rowIndex]){
            if(grid[rowIndex][colIndex] === '1'){
                countIslands++;
                terraform(parseInt (rowIndex), parseInt(colIndex),grid);
            }
        }
    }

    return countIslands
}

const terraform = (rowIndex, colIndex, grid) => {
    if(grid[rowIndex][colIndex] === undefined || grid[colIndex]===undefined||grid[rowIndex][colIndex]==='0') return;

    terraform(rowIndex +1, colIndex, grid);
    terraform(rowIndex -1, colIndex, grid);
    terraform(rowIndex, colIndex+1, grid);
    terraform(rowIndex, colIndex-1, grid);
}