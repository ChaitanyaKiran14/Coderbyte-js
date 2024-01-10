Starts from the top-left corner of the matrix and traverses in a spiral order
let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let res = [];
let left = 0, right = matrix[0].length;
let top = 0, bottom = matrix.length;

while (left < right && top < bottom) {
    // Traverse top row
    for (let i = left; i < right; i++) {
        res.push(matrix[top][i]);
    }
    top++;

    // Traverse right column
    for (let i = top; i < bottom; i++) {
        res.push(matrix[i][right - 1]);
    }
    right--;

    if (!(left < right && top < bottom)) {
        break;
    }

    // Traverse bottom row
    for (let i = right - 1; i >= left; i--) {
        res.push(matrix[bottom - 1][i]);
    }
    bottom--;

    // Traverse left column
    for (let i = bottom - 1; i >= top; i--) {
        res.push(matrix[i][left]);
    }
    left++;
}

console.log(res);
