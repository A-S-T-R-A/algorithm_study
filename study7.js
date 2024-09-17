const str = "aaassdsssassdssacssdssac" // dssac

/**
 * aaadsadsadsa // dsa
 */

function isGood(str, count) {
    const charsSet = new Set()

    for (let i = 0; i < str.length; i++) {
        charsSet.add(str[i])
    }
    return charsSet.size === count
}

function solve(str) {
    const obj = {}
    let charCount = 0

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1
            charCount += 1
        }
    }

    let left = 0
    let right = 0

    let res = ""

    while (right <= str.length) {
        const newStr = str.slice(left, right + 1)
        // console.log(newStr)
        if (isGood(newStr, charCount)) {
            left += 1
            res = newStr
        } else {
            right += 1
        }
    }

    return res
}

console.log(solve(str))
