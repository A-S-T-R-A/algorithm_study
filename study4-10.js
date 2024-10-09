const arr = [-5, -1, 1, -4, -5, -100] // 6

/**
 * -5, 1, 2, -4, 5, -100 -> 5
 * 0, 1, 3, -4, 6 // 6
 */

function solve(arr) {
    let res = Number.MIN_SAFE_INTEGER
    // const pref = []

    // for (let i = 0; i < arr.length; i++) {
    //     if (i === 0) {
    //         pref.push(arr[i])
    //     } else {
    //         const sum = pref[i - 1] + arr[i]

    //         pref.push(sum)
    //     }
    // }

    for (let i = 0; i < arr.length; i++) {
        let tempSum = 0
        for (let j = i; j < arr.length; j++) {
            tempSum += arr[j]

            if (res < tempSum) {
                res = tempSum
            }
        }
    }

    return res
}

console.log(solve(arr))
