const arr = [0, 1, 2, 3, 4]
const s = 1

/**
 * 2, 6, 8, 9, 5, 5
 * -1, 2,4,5, 1 -- 1 // -1+2 // true
 * 0,1,2,3,4 -- 3 // 0+3 // true
 * [] -- 1 // false
 */

function isPresent(arr, s) {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]] += 1
        } else {
            obj[arr[i]] = 1
        }
    }

    for (let j = 0; j < arr.length; j++) {
        if (obj[s - arr[j]]) {
            if (s - arr[j] !== arr[j]) {
                return true
            } else if (obj[arr[j]] > 1) {
                return true
            }
        }
    }

    return false
}

console.log(isPresent(arr, s))
