// 1, 3, 5, 8, 9
// 2, 5, 7, 7, 8, 3, 9
// answer: [5, 8, 9]
// answer - 3

// LCS([1, 3, 7], [2, 5, 7])
//    -> LCS([1, 3], [2, 5, 7])
//    -> LCS([1, 3, 7], [2, 5])
//    -> LCS([1, 3], [2, 5]) + 1

function LCS(arr1, arr2) {
  let count = 0;

  function rec(i, j) {
    if (arr1[i] === arr2[j]) {
      return rec(i - 1, j - 1);
    }
  }

  rec(arr1.length - 1, arr2.length - 1);

  return count;
}

// LCS(i, j)
//   -> LCS(i - 1, j)
//   -> LCS(i, j -1)
//   -> LCS(i - 1, j  - 1) + 1, a[i] = b[j]

console.log(LCS([1, 3, 5, 8, 9], [2, 5, 7, 7, 8, 3, 9]));
