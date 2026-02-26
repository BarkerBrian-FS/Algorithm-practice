function searchMatrix(matrix, target){
    //m stores number of rows
    const m = matrix.length;
    //n stores number of columns
    //use matrix[0] each row has same columns
    const n = matrix[0].length;
    //starting index of 1D array 
    let left = 0;
    let right = m * n - 1;
    //continue while window is valid
    while(left <= right){
        //find mid of current window 
        const mid = (Math.floor(left + right) / 2);
        //convert 1D index to 2D coords
        //mid val is value of row and colum 
        const midValue = matrix[Math.floor(mid / n)][mid % n];

        if(midValue === target) return true;
        else if (midValue < target) left = mid + 1;
        else right = mid - 1
    }
    return false;
}