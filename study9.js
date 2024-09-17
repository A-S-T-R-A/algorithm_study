const str = "aabaab" // true

/**
 * abcd // false
 * aa // true
 * ab // false
 * babbab // true
 * abcfghabc // false
 * abcabcabc // true
 * */

function split(str, count) {
    const arr = []
    let tempStr = ""
    const partLength = str.length / count

    if (str.length % count !== 0) return arr

    for (let i = 0; i < str.length; i++) {
        tempStr += str[i]

        if (tempStr.length === partLength) {
            arr.push(tempStr)
            tempStr = ""
        }
    }

    return arr
}

function solve(str) {
    for (let i = 2; i <= str.length; i++) {
        const arr = split(str, i)

        if (arr.length === 0) {
            continue
        }

        let word = arr[0]
        let isEqual = true

        for (let j = 1; j < arr.length; j++) {
            if (word !== arr[j]) {
                isEqual = false
                break
            }
        }

        console.log(word, arr)

        if (isEqual) return true
    }

    return false
}

console.log(solve(str))
