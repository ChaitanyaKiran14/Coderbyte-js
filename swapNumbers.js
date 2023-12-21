let array = [1, 2, 3];

// Swap elements at the second and third positions
let temp = array[1];  // Store the value at the second position in a temporary variable
array[1] = array[2];  // Assign the value at the third position to the second position
array[2] = temp;      // Assign the value in the temporary variable to the third position

// Print the modified array
console.log("Modified array:", array);
