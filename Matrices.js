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

//vertical traversal

function verticalTraverse(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let col = 0; col < cols; col++) {
        if (col % 2 === 0) { // even column → top to bottom
            for (let row = 0; row < rows; row++) {
                result.push(matrix[row][col]);
            }
        } else { // odd column → bottom to top
            for (let row = rows - 1; row >= 0; row--) {
                result.push(matrix[row][col]);
            }
        }
    }

    return result;
}


//vertical traversal starting at bottom right

function verticalTraverseFromBottomRight(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];

    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let col = cols - 1; col >= 0; col--) {
        for (let row = rows - 1; row >= 0; row--) {
            result.push(matrix[row][col]);
        }
    }

    return result;
}

// Example
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

const traversal = verticalTraverseFromBottomRight(matrix);
console.log(traversal.join(" "));

//reverse transposition

function transformMatrixReverse(matrix) {
    const rows = matrix.length;
    const cols = rows > 0 ? matrix[0].length : 0;
    const transposed = [];

    for (let i = cols - 1; i >= 0; i--) { // start from last column
        const newRow = [];
        for (let j = 0; j < rows; j++) {
            newRow.push(matrix[j][i]); // take element from original matrix
        }
        transposed.push(newRow);
    }

    return transposed;
}

// Example matrix
let originalMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let newMatrix = transformMatrixReverse(originalMatrix);

// Print the result
for (let row of newMatrix) {
    console.log(row.join(" "));
}


//transpose 2d array

// Function to transpose a 2D array (rows ↔ columns)
function transposeSeating(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];

    for (let col = 0; col < cols; col++) {
        transposed[col] = [];
        for (let row = 0; row < rows; row++) {
            transposed[col][row] = matrix[row][col];
        }
    }

    return transposed;
}

// Restaurant seating before transposition (rows)
let seatingBefore = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// Call the function and store the result
let seatingAfter = transposeSeating(seatingBefore);

// Print the transposed seating arrangement
for (let row of seatingAfter) {
    console.log(row.join(" "));
}