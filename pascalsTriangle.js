function generate(numRows){
    //this will store all rows each row its own array
    const triangle = [];
    //i is curr row index row length is always i + 1
    for(let i = 0; i < numRows; i++){
        //first and last element of every row is 1
        const row = new Array(i + 1).fill(1);
        //we skip index 0 and last index only computer inner values
        for(let j = 0; j < i; j++){
            //triangle[row][col] = triangle[row-1][col-1] + triangle[row-1][col]                   
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        //adds completed row to triangle 
        triangle.push(row);
    }
    return triangle;
}

// Output:
// Pascal's Triangle for 5 rows:
// [
//   [ 1 ],
//   [ 1, 1 ],
//   [ 1, 2, 1 ],
//   [ 1, 3, 3, 1 ],
//   [ 1, 4, 6, 4, 1 ]
// ]