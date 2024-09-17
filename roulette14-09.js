// const arr = [1, 2, 3, 4, 5, 6]

/**
 * 1 2 3 4
 * 1 2 3 5
 * 1 2 3 6
 * 1 2 4 5
 * 1 2 4 6
 * 1 2 5 6
 * 1 3 4 5
 * 1 3 4 6
 * 1 3 5 6
 * 1 4 5 6
 * 2 3 4 5
 * 2 3 4 6
 * 2 3 5 6
 * 2 4 5 6
 * 3 4 5 6
 */

// function PRINT_ARRAY(arr) {
//     const res = []

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             for (let k = j + 1; k < arr.length; k++) {
//                 for (let l = k + 1; l < arr.length; l++) {
//                     res.push([arr[i], arr[j], arr[k], arr[l]])
//                 }
//             }
//         }
//     }

//     return res
// }

// const arr = [1, 2, 3, 4, 5, 6]
// const arr = [10, 5, 81, 81, 1, 3] // -- 81 81
// const arr = [10, 5, 9, 1, 3] //-- 10 9

// function MAX_ARRAY(arr) {
//     let maxNum = Number.MIN_SAFE_INTEGER
//     let secondMaxNum = Number.MIN_SAFE_INTEGER

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= maxNum) {
//             maxNum = arr[i]
//         }
//     }

//     arr[arr.indexOf(maxNum)] = Number.MIN_SAFE_INTEGER

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= secondMaxNum) {
//             secondMaxNum = arr[i]
//         }
//     }
//     return [maxNum, secondMaxNum]
// }

// const arr = [1, 2, 3, 4, 5, 6]
// const k = 2

// function REARRANGE_ARRAY(arr, k) {
//     const res = []
//     let tempArr = []

//     for (let i = 0; i < arr.length; i++) {
//         tempArr.push(arr[i])
//         if (tempArr.length === k) {
//             res.push(tempArr)
//             tempArr = []
//         }
//     }

//     res.reverse()

//     return res.flat()
// }

// console.log(REARRANGE_ARRAY(arr, k))

// COUNT_STACK. Написать стек, который хранит свой минимум

// class COUNT_STACK {
//     stack
//     min

//     constructor() {
//         this.stack = []
//         this.min = []
//     }

//     add(x) {
//         const lastMinNumber = this.min[this.min.length - 1]
//         if (lastMinNumber >= x) {
//             this.min.push(x)
//         }

//         this.stack.push(x)
//     }

//     removeLast() {
//         const deletedNumber = this.stack.pop()
//         if (deletedNumber === this.min[this.min.length - 1]) {
//             this.min.pop()
//         }
//     }

//     findMin() {
//         return this.min[this.min.length - 1]
//     }
// }

const arr1 = [1, 24, 100, 102]
const arr2 = [20, 21, 23]

function ARRANGE_ARRAYS(arr1, arr2) {
    const res = []
    const l = arr1.length + arr2.length
    let p1 = 0
    let p2 = 0

    while (res.length !== l) {
        if (!arr1[p1]) {
            res.push(arr2[p2])
            p2 += 1

            continue
        }

        if (!arr2[p2]) {
            res.push(arr1[p1])
            p1 += 1

            continue
        }

        if (arr1[p1] < arr2[p2]) {
            res.push(arr1[p1])
            p1 += 1
        } else {
            res.push(arr2[p2])
            p2 += 1
        }
    }

    return res
}

console.log(ARRANGE_ARRAYS(arr1, arr2))
