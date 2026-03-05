function reflectOverSecondaryDiagonal(matrix) {
    let size = matrix.length;
    let newMatrix = [];

    for (let i = 0; i < size; ++i) {
        newMatrix[i] = [];
        for (let j = 0; j < size; ++j) {
            // TODO: Complete the code to obtain the reflected square matrix in newMatrix.
            newMatrix[i][j] = matrix[size -1 -j][size - 1 -i]
        }
    }
    return newMatrix;
}

// Example square matrix to reflect over the secondary diagonal
let squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// TODO: Call the function on squareMatrix and store the result in transformedMatrix.
// Print the transformed matrix.
let transformedMatrix = reflectOverSecondaryDiagonal(squareMatrix)

for(let row of transformedMatrix){
    console.log(row.join(" "))
}

// traversal 
function traverseLibrary(library) {
    let row = library.length - 1;
    let col = 0;
    let goingUp = true;
    const result = [];

    while (col < library[0].length) {
        result.push(library[row][col]);

        if (goingUp) {
            if (row == 0) {
                goingUp = false;   // change direction
                col += 1;
            } else {
                row -= 1;
            }
        } else {
            if (row == library.length - 1) {
                goingUp = true;   // change direction
                col += 1;
            } else {
                row += 1;
            }
        }
    }

    return result;
}


//zigzag traversal 

function columnTraverse(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let row = rows - 1;
    let col = cols - 1;
    let direction = "up";
    const output = [];
    let index = 0;

    while (index < rows * cols) {
        output[index++] = matrix[row][col];

        if (direction === "up") {
            if (row === 0) {
                direction = "down";
                col -= 1;        // move left to next column
            } else {
                row -= 1;
            }
        } 
        else if (direction === "down") {
            if (row === rows - 1) {
                direction = "up";
                col -= 1;        // move left to next column
            } else {
                row += 1;
            }
        }
    }

    return output;
}
