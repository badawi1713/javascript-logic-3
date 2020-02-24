let arrayMultiply = (matrix1, matrix2) => {
  let result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrix1[0].length; k++) {
        sum = sum + matrix1[i][k] * matrix2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return console.log("Result:", result);
};

arrayMultiply(
  [
    [3, 4],
    [1, 2]
  ],
  [
    [7, 5],
    [6, 4]
  ]
);
