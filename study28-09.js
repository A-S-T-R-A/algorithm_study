const arr = [-100] // 100

/**
 *
 *[3, 2, -10, 6] // 6
 *                              i
 * arr =   1, -100, 99, -4,  2, 3, -5, 5,
 * pref =  1,  -99,  0, -4, -2, 1, 6, 11,
 *
 * index.  0,    1,  2,  3,  4, 5, 6,  7
 *
 * i = 5
 * 0..5: pref[5]           = 1 -    0  =   1
 * 1..5: pref[5] - pref[0] = 1 -    1  =   0
 * 2..5: pref[5] - pref[1] = 1 - (-99) = 100
 * 3..5: pref[5] - pref[2] = 1 -    0  =   1
 * 4..5: pref[5] - pref[3] = 1 -  (-4) =   5
 * 5..5: pref[5] - pref[4] = 1 -  (-2) =   3
 *
 *
 */

function solveFast(arr) {
    let result = Number.MIN_SAFE_INTEGER
    let pref = []

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i]
        if (i === 0) {
            pref.push(el)
        } else {
            pref.push(pref[i - 1] + arr[i])
        }
    }

    let tempNum = 0

    for (let i = 0; i < pref.length; i++) {
        if (pref[i - 1] && pref[i - 1] < tempNum) {
            tempNum = pref[i - 1]
        }

        const diff = pref[i] - tempNum

        if (result < diff) {
            result = diff
        }
    }

    return result
}

function solveFastMaksym(arr) {
    let result = Number.MIN_SAFE_INTEGER
    let tempNum = 0
    let tempSum = 0

    for (let i = 0; i < pref.length; i++) {
        tempSum += arr[i]
        const diff = tempSum - tempNum

        if (result < diff) {
            result = diff
        }

        if (tempSum < tempNum) {
            tempNum = tempSum
        }
    }

    return result
}

console.log(solveFast(arr))

// function solve(arr) {
//     let result = Number.MIN_SAFE_INTEGER
//     let pref = []

//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i]
//         if (i === 0) {
//             pref.push(el)
//         } else {
//             pref.push(pref[i - 1] + arr[i])
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         //let tempNum = 0
//         for (let j = i; j < arr.length; j++) {
//             // O(n^3)
//             // const segmentSum = arr.slice(i, j + 1).reduce((acc, val) => acc + val, 0)
//             // if (segmentSum > sum) {
//             //     sum = segmentSum
//             // }

//             // O(n^2)
//             //tempNum += arr[j]

//             //if (tempNum > result) {
//             //    result = tempNum
//             //}

//             // O(n^2) with prefix sums
//             const segmentSum = i === 0 ? pref[j] : pref[j] - pref[i - 1]
//             if (segmentSum > result) {
//                 result = segmentSum
//             }
//         }
//     }

//     return result
// }
