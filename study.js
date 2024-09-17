const chars = ""

/**
 * a - ""
 * abc - bc
 * "" - ""
 *
 */
const vowels = ["a", "e", "i", "o", "u"]

function deleteAllVowel(chars, vowels) {
    let newStr = []

    for (let i = 0; i < chars.length; i++) {
        if (!vowels.includes(chars[i])) {
            newStr.push(chars[i])
        }
    }

    return newStr.join("")
}

function bestVowel(chars, vowels) {
    let obj = {}

    for (let i = 0; i < chars.length; i++) {
        if (vowels.includes(chars[i])) {
            if (obj[chars[i]]) {
                obj[chars[i]] += 1
            } else {
                obj[chars[i]] = 1
            }
        }
    }

    let bestVowel = []

    Object.entries(obj).forEach(([key, value]) => {
        if (!bestVowel.length) {
            bestVowel = [key, value]
        }

        if (value > bestVowel[1]) {
            bestVowel = [key, value]
        }
    })

    return bestVowel[0]
}

console.log(bestVowel(chars, vowels))
