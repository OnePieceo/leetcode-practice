var setZeroes = function (matrix) {
  const arr = [];
  const rowNum = matrix.length;
  const colNum = matrix[0].length;
  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      if (matrix[i][j] === 0) {
        arr.push([i, j]);
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const [row, col] = arr[i];
    for (let j = 0; j < rowNum; j++) {
      matrix[j][col] = 0;
    }
    for (let j = 0; j < colNum; j++) {
      matrix[row][j] = 0;
    }
  }
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
);

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]),
);
