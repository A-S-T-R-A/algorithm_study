const arr = [1] // 4

/**
 * [3, 2, 5, 1] // 4
 * 3,2,4,5 // 1
 * 1,2,4,5 // 3
 * 9,10,7,1,3,2,4,5,6 // 8
 * 1,2,3 // 4
 * 2,3,4 // 1
 * 2 // 1
 * 1 // 2
 */

function findMissingNumber(arr) {
    const sortedArr = arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        if (sortedArr[i] !== i + 1) {
            return i + 1
        }
    }

    return arr.length + 1
}

console.log(findMissingNumber(arr))
