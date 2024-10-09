// const table = [
//     [1, 3, 2, 4],
//     [2, 4, 5, 4],
//     [2, 3, 1, 1],
// ] // 21

// const table = [
//     [5, 3, 5, 5, 2],
//     [2, 2, 2, 5, 5],
//     [4, 1, 3, 3, 5],
//     [4, 2, 4, 3, 2],
// ]

const table = [
    [0, 50, 50], // 100
    [57, 50, 50], // 157
    [51, 55, 52], // 158
] // 57 105 100  = 262

function solve(arr) {
    let rowSum = 0
    let colSum = 0
    let rowIdx = 0

    for (let i = 0; i < arr.length; i++) {
        const row = arr[i]
        let tempSum = 0
        for (let j = 0; j < row.length; j++) {
            const el = row[j]
            tempSum += el
        }
        if (tempSum > rowSum) {
            rowSum = tempSum
            rowIdx = i
        }
    }

    for (let i = 0; i < arr[0].length; i++) {
        let tempColSum = 0

        for (let j = 0; j < arr.length; j++) {
            if (j === rowIdx) {
                continue
            }
            const column = arr[j][i]
            tempColSum += column
        }
        if (tempColSum > colSum) {
            colSum = tempColSum
        }
    }

    return rowSum + colSum
}

console.log(solve(table))
