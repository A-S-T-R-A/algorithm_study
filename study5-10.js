// const table = [
//     [1, 3, 2, 4],
//     [2, 4, 5, 4],
//     [2, 3, 1, 1],
// ] // 21 +

// const table = [
//     [5, 3, 5, 5, 2],
//     [2, 2, 2, 5, 5],
//     [4, 1, 3, 3, 5],
//     [4, 2, 4, 3, 2],
// ]

// const table = [
//     [0, 50, 50], // 100
//     [57, 50, 50], // 157
//     [51, 55, 52], // 158
// ] // 57 105 100  = 262

// function solve(table) {
//     let res = 0
//     const rowSum = []
//     const columnSum = []

//     for (let i = 0; i < table.length; i++) {
//         const row = table[i]

//         let tempSum = 0

//         for (let j = 0; j < row.length; j++) {
//             const el = row[j]

//             tempSum += el
//         }

//         rowSum.push(tempSum)
//     }

//     for (let i = 0; i < table[0].length; i++) {
//         let tempSum = 0
//         for (let j = 0; j < table.length; j++) {
//             const col = table[j][i]

//             tempSum += col
//         }

//         columnSum.push(tempSum)
//     }

//     for (let i = 0; i < table.length; i++) {
//         const row = table[i]

//         for (let j = 0; j < row.length; j++) {
//             const el = row[j]
//             const rowS = rowSum[i]
//             const colS = columnSum[j]

//             const tempSum = rowS + colS - el

//             if (res < tempSum) {
//                 res = tempSum
//             }
//         }
//     }

//     return res
// }

// console.log(solve(table))

const arr = [0, 10] // 1,4,7,10
const k = 2 // 3
const d = 3

function isPossible(arr, k, d) {
    let counter = 1
    let tempNum = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - tempNum >= d) {
            counter += 1
            tempNum = arr[i]
        }
    }

    return counter >= k
}

function solve(arr, k) {
    let l = 0
    let r = arr[arr.length - 1] + 1

    while (r - l > 1) {
        const middle = Math.floor((l + r) / 2)

        if (isPossible(arr, k, middle)) {
            l = middle
        } else {
            r = middle
        }
    }

    console.log(l, r)

    return l
}

console.log(solve(arr, k))
