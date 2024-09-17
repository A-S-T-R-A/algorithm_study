const arr = [1, 2, 3, 4, 5, 6]

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

function PRINT_ARRAY(arr) {
    const res = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                for (let l = k + 1; l < arr.length; l++) {
                    res.push([arr[i], arr[j], arr[k], arr[l]])
                }
            }
        }
    }

    return res
}

const maxArray = [10, 5, 81, 81, 1, 3] // 81,81

function MAX_ARRAY(arr) {
    let max1 = Number.MIN_SAFE_INTEGER
    let max2 = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1
            max1 = arr[i]
        } else if (arr[i] > max2) {
            max2 = arr[i]
        }
    }

    return [max1, max2]
}

// REARRANGE_ARRAYДан массив и число К (длина массива делится на К).
// Нужно разбить массив на куски длиной К и выписать их
// в обратном порядке ([1, 2, 3, 4, 5, 6], K = 2 —> [5, 6, 3, 4, 1, 2])
//  [1, 2][3,4],[5,6] --> [5,6][3, 4][1, 2]

// const arr1 = [1, 2, 3, 4, 5, 6] // 5, 6, 3, 4, 1, 2
// const k = 2

// function REARRANGE_ARRAY(arr, k) {
//     const res = []
//     for (let i = 0; i < arr.length; i += k) {
//         // O(N/K)
//         const smallArr = arr.slice(i, k + i) // O(K)
//         res.push(smallArr)
//     }

//     return res.reverse().flat()
// }
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

// ARRANGE_ARRAYS. Дано два отсортированных массива, объединить их

const arr1 = [1, 3, 8, 45, 90]
const arr2 = [2, 7, 10, 14]

function ARRANGE_ARRAYS(arr1, arr2) {
    const res = []
    const maxLength = Math.max(arr1.length, arr2.length)

    for (let i = 0; i < maxLength; i++) {
        if (arr1[i] > arr2[i]) {
            if (!arr2[i]) {
                res.push(arr1[i])
            } else if (!arr1[i]) {
                res.push(arr2[i])
            } else {
                res.push(arr2[i], arr1[i])
            }
        } else {
            if (!arr1[i]) {
                res.push(arr2[i])
            } else if (!arr2[i]) {
                res.push(arr1[i])
            } else {
                res.push(arr1[i], arr2[i])
            }
        }
    }

    return res
}

console.log(ARRANGE_ARRAYS(arr1, arr2))
