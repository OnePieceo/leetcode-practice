var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      [matrix[i][j], matrix[n - 1 - j][n - 1 - i]] = [
        matrix[n - 1 - j][n - 1 - i],
        matrix[i][j],
      ];
    }
  }
  for (let i = 0; i <= n / 2 - 1; i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - 1 - i][j]] = [
        matrix[n - 1 - i][j],
        matrix[i][j],
      ];
    }
  }
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ]),
);
