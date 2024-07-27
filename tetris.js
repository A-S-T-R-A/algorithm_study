// { 1: count, 2: count: 3: count}
// find smallest

const array = [1, 1, 2, 2, 2, 3, 1, 2, 3]
const n = 3

function tetris(arr, n) {
    const row = new Array(n).fill(0)

    for (let i = 0; i < arr.length; i++) {
        row[arr[i] - 1] += 1
    }

    return Math.min(...row)
}

console.log(tetris(array, n))
