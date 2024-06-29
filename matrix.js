//             0  1  2  3  4  5   6   7   8
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17]
const num = 3

function binarySearch(num, arr) {
    let l = 0
    let r = arr.length - 1

    while (r - l > 1) {
        const middle = Math.floor((l + r) / 2)
        const arrMiddle = arr[middle]

        if (num > arrMiddle) {
            l = middle
        } else {
            r = middle
        }
    }

    console.log("res", l, r)

    if (arr[l] >= num) return l
    if (arr[r] >= num) return r

    return "pawol nahyi, naydi norm 4islo"
}

const matrix1 = [
    [1, 2, 7],
    [3, 4, 5],
    [-3, 100, 200],
]

function matrix(num, arr) {
    let minNum = Number.MAX_SAFE_INTEGER
    let res = []

    for (let i = 0; i < arr.length; i++) {
        const index = binarySearch(num, arr[i])

        if (typeof index !== "string") {
            if (arr[i][index] < minNum) {
                minNum = arr[i][index]

                res = [i, index]
            }
        }
    }

    return minNum === Number.MAX_SAFE_INTEGER ? false : res
}

console.log(matrix(4, matrix1))
