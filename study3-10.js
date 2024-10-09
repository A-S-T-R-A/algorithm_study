const arr = [1, 2, 3, 5, 7, 10] // 1,2,5,10
const k = 4 // 4

function isTrue(arr, k, d) {
    let last = arr[0]
    let count = 1

    for (let i = 1; i < arr.length; i++) {
        const dif = arr[i] - last

        if (dif >= d) {
            count++
            last = arr[i]
        }
    }
    return count >= k
}

function solve(arr, k) {
    const sortedArr = arr.sort((a, b) => a - b)
    let res = 1
    const max = sortedArr[sortedArr.length - 1]

    while (max !== res) {
        if (isTrue(sortedArr, k, res)) {
            res++
        } else {
            break
        }
    }

    return res - 1
}

console.log(solve(arr, k))
