// const n = 3

// const arr = []

// function recursion(str, n) {
//     if (str.length === n) {
//         arr.push(str)
//         return
//     }

//     recursion(str + "1", n)
//     recursion(str + "0", n)
// }

// recursion("", n)

// console.log(arr)

const arr = [1, 2, 3]

/**
 * []
 * 1
 * 2
 * 3
 * 12
 * 23
 * 123
 * 13
 */

const res = []

function recursion(acc, arr, i) {
    if (arr.length <= i) {
        res.push(acc)
        return
    }

    recursion([...acc, arr[i]], arr, i + 1)
    recursion([...acc], arr, i + 1)
}

recursion([], arr, 0)

console.log(res)
