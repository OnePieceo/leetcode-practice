var spiralOrder = function (matrix) {
  const arr = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const rowNum = matrix.length,
    colNum = matrix[0].length;
  const ans = Array(rowNum * colNum);
  let row = 0,
    col = 0,
    status = 0;
  for (let i = 0; i < rowNum * colNum; i++) {
    ans[i] = matrix[row][col];
    matrix[row][col] = "t";
    const x = row + arr[status][0];
    const y = col + arr[status][1];
    if (x < 0 || x >= rowNum || y < 0 || y >= colNum || matrix[x][y] === "t") {
      status = (status + 1) % 4;
    }
    row = row + arr[status][0];
    col = col + arr[status][1];
  }
  return ans;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
);
