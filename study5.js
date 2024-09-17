const arr = [1, 1]

/**
 * 1,2,3,10 // error
 * [1] // error
 * [1, 1] // [[1], [1]]
 * [-1, 2, 1] // [[-1,2], [1]]
 *
 *
 */

// function solve(arr) {
//     if (arr.length === 1) {
//         throw new Error("error")
//     }

//     for (let i = 0; i < arr.length; i++) {
//         const arr1 = arr.slice(0, i + 1)
//         const arr2 = arr.slice(i + 1, arr.length)

//         let arr1Sum = 0
//         let arr2Sum = 0

//         for (let j = 0; j < arr1.length; j++) {
//             arr1Sum += arr1[j]
//         }

//         for (let k = 0; k < arr2.length; k++) {
//             arr2Sum += arr2[k]
//         }

//         if (arr1Sum === arr2Sum) {
//             return [arr1, arr2]
//         }
//     }

//     throw new Error("error")
// }

function solve(arr) {
    if (arr.length === 1) {
        throw new Error("error")
    }

    let totalSum = 0
    let sum = 0
    let indx

    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i]
    }

    for (let j = 0; j < arr.length; j++) {
        if (sum + arr[j] === totalSum / 2) {
            indx = j
        }

        sum += arr[j]
    }

    if (indx !== undefined) {
        return [arr.slice(0, indx + 1), arr.slice(indx + 1, arr.length)]
    } else {
        throw new Error("error")
    }
}

console.log(solve(arr))
