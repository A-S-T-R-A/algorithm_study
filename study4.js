const str1 = "a"
const str2 = ""

/**
 * abc, ac // delete b = true
 * a, '' // true
 * abbc , abc // true
 * abc, ca // false
 *
 * {a:1, b:1, c:1}
 *
 */

function solve(str1, str2) {
    let incr2 = 0
    for (let i = 0; i < str1.length; i++) {
        const fIndx = i + incr2
        const scndI = i

        if (str1[fIndx] !== str2[scndI]) {
            if (incr2 < 1) {
                incr2++
            } else {
                return false
            }
        }
    }

    return true
}

console.log(solve(str1, str2))
