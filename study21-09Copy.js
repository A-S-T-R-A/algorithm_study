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

const arr1 = [1, 0, 1, 0]
const arr2 = [2, 0]

// [1,2,2,5]

// [1,0,0]

// [0,0,0,2]

function solveSubtract(arr1, arr2) {
    let a1 = [...arr1]
    let a2 = [...arr2]

    const diff = a1.length - a2.length
    const newArr = new Array(diff).fill(0)
    a2 = [...newArr, ...a2]

    let tempNum = 0

    for (let i = a1.length - 1; i >= 0; i--) {
        const el1 = a1[i]
        const el2 = a2[i]

        let diff = el1 - el2 - tempNum

        if (diff < 0) {
            diff += 10
            tempNum = 1
        } else {
            tempNum = 0
        }

        a1[i] = diff
    }

    /**
     * const pos = a1.findFirst(item => item != 0)
     * return a1.slice(pos, a1.length)
     */
    // let bool = false
    // return a1
    //     .map(item => {
    //         if (item === 0 && !bool) {
    //             return
    //         } else {
    //             bool = true
    //             return item
    //         }
    //     })
    //     .filter(item => item !== undefined)

    const pos = a1.findIndex(item => item !== 0)
    return a1.slice(pos, a1.length)
}

console.log(solveSubtract(arr1, arr2))
