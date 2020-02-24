let transpose = matrix => {
  let result = new Array(matrix[0].length);

  for (let row = 0; row < result.length; row++) {
    result[row] = new Array(matrix.length);

    for (let column = 0; column < result[row].length; column++) {
      result[row][column] = matrix[column][row];
    }
  }
  return console.log("Transpose matrix:", result);
};

transpose([
  [1, 2, 3],
  [4, 5, 8],
  [7, 8, 9]
]);

transpose([
  [1, 4, 7],
  [2, 5, 8],
  [3, 8, 9]
]);
