Starts From the top-right corner of the matrix
let matrix = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, 16], [17, 18, 19, 20]];
let res = [];
let left = 0,right = matrix[0].length;
let top = 0,bottom = matrix.length;
while (left < right && top < bottom) {
  // Traverse top row
  for (let i = right - 1; i >= left; i--) {
    res.push(matrix[top][i]);
  }
  top++;
  // Traverse down column
  for (let i = top; i < bottom; i++) {
    res.push(matrix[i][left]);
  }
  left++;

  if (!(left < right && top < bottom)) {
    break;
  }
  // Traverse bottom row
  for (let i = left; i < right; i++) {
    res.push(matrix[bottom - 1][i]);
  }
  bottom--;
  // Traverse right column
  for (let i = bottom - 1; i >= top; i--) {
    res.push(matrix[i][right - 1]);
  }
  right--;
}
console.log(res);
