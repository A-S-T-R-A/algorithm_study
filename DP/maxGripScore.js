// 3 3
// 2 4 9
// 1 3 2
// 11 3 1
// Answer: 18

// 4 4
// 8 5 -3 -10
// 3 -9 -8 -10
// 2 -1 -3 -8
// -3 1 9 3
// Answer: 25

// 1 1
// -10
// Answer: -10

const getId = (x, y) => `${x},${y}`;
function maxGripScore(x, y, arr, lib = {}) {
  if (x === arr.length - 1 && y === arr[0].length - 1) return arr[x][y];
  if (x >= arr.length || y >= arr[0].length) return -Infinity;

  if (lib[getId(x, y)] === undefined) {
    lib[getId(x, y)] = Math.max(maxGripScore(x + 1, y, arr, lib), maxGripScore(x, y + 1, arr, lib)) + arr[x][y]; // score from (x,y) to the end
  }

  return lib[getId(x, y)];
}

const array1 = [
  [2, 4, 9],
  [1, 3, 2],
  [11, 3, 1]
];

const array2 = [
  [8, 5, -3, -10],
  [3, -9, -8, -10],
  [2, -1, -3, -8],
  [-3, 1, 9, 3]
];

const array3 = [[-10]];

console.log(maxGripScore(0, 0, array1));
console.log(maxGripScore(0, 0, array2));
console.log(maxGripScore(0, 0, array3));
