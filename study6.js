const arr = [1, 1, 2, 100, 100] // true

/**
 * [] // 0
 * [1,2,3,4] // 0
 *
 * [3,3,3,3]
 */

function solve(arr) {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1
        } else {
            obj[arr[i]] = 1
        }
    }

    let count = 0

    Object.values(obj).forEach(value => {
        count += Math.floor(value / 2)
    })

    return Math.floor(count / 2)
}

console.log(solve(arr))
