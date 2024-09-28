// [1, 2, 4] + [3, 5] = [1, 5, 9]

// [1, 2, 4] + [3, 8] = [1, 6, 2]

/**
 * [2,3,4,5,6] + [0,0,0,0,0,1] = [3,4,5,6,7]
 *  i = 4    6 1
 *  */

// const arr1 = [9]
// const arr2 = [9, 9, 9]

// // arr1.length - arr2.length
// // Array.fill()

// function solveAdd(arr1, arr2) {
//     let a1 = [...arr1]
//     let a2 = [...arr2]
//     if (a1.length < a2.length) {
//         ;[a1, a2] = [a2, a1]
//     }

//     const diff = a1.length - a2.length
//     const newArr = new Array(diff).fill(0)
//     a2 = [...newArr, ...a2]

//     let tempNum = 0

//     for (let i = a1.length - 1; i >= 0; i--) {
//         const el1 = a1[i]
//         const el2 = a2[i]
//         let sum = el1 + el2

//         if (tempNum > 0) {
//             sum += 1
//             tempNum -= 1
//         }

//         if (sum > 9) {
//             sum -= 10
//             tempNum += 1
//         }

//         a1[i] = sum
//     }

//     if (tempNum > 0) {
//         return [1, ...a1]
//     }

//     return a1
// }

// console.log(solveAdd(arr1, arr2))

// const arr1 = [1, 0, 0, 0]
// const arr2 = [9, 9, 8]

const arr1 = [1, 0, 1, 0]
const arr2 = [2, 0]

// [1,2,2,5]

// [1,0,0] - [2,5]
// [1,-1,5]
// [1, 7, 5]
// [0, 7, 5]
// [7,5]

function solveSubtract(arr1, arr2) {
    let a1 = [...arr1]
    let a2 = [...arr2]

    const diff = a1.length - a2.length
    const newArr = new Array(diff).fill(0)
    a2 = [...newArr, ...a2]

    //const arr1 = [1,2,3,4]
    // const arr2 = [8]

    // [1,0,0] - [2,5]
    // [1,-1,5]
    // [1, 7, 5]
    // [0, 7, 5]
    // [7,5]

    for (let i = a1.length - 1; i >= 0; i--) {
        let diff = a1[i] - a2[i]

        if (diff < 0) {
            a1[i] = diff + 10
            a1[i - 1] -= 1
        } else {
            a1[i] = diff
        }
    }

    let flag = true

    // [0,0,2,3,0]

    const pos = a1.findIndex(item => item !== 0)
    return a1.slice(pos, a1.length)

    // return a1.filter(item => {
    //     if (item !== 0) {
    //         flag = false
    //         return true
    //     }

    //     if (flag) {
    //         return false
    //     } else {
    //         return true
    //     }
    // })
}

// console.log(solveSubtract(arr1, arr2))

// [0 / 1] [0 / 1] []  []
//.  2    x.   2  x 2 x 2
/**
 * 000 | +1
 * 001 | +1
 * 010 | +1
 * 011 | +1
 * 100 | +1
 * 101 | +1
 * 110 | +1
 * 111 | +1
 */

const n = 5

let res = []
function gen(pref, n) {
    if (pref.length === n) {
        res.push(pref)
        return
    }

    gen(pref + "0", n)
    if (pref.length === 0 || pref[pref.length - 1] !== "1") {
        gen(pref + "1", n)
    }
}

function solve(n) {
    gen("", n)
}

solve(n)

console.log(res)
