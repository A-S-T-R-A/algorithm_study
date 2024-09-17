const str = "aaaabbbccccceeeeaaaassss" //a4b3c5e4a4

/**
 *
 * "aaaabbbccccceeeeaaaassss"//a4b3c5e4a4
 * xcvb // x1c1v1b1
 * sssdsssasd   //s3d1s3a1s1d1
 */

function compress(str) {
    let res = ""

    let char = ""
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (char === str[i]) {
            count += 1
        } else {
            char = str[i]
            count = 1
        }

        if (char !== str[i + 1]) {
            if (count === 1) {
                res += str[i]
            } else {
                res += str[i] + `${count}`
            }
        }
    }

    return res
}

function decompress(str) {
    let res = ""

    for (let i = 0; i < str.length; i++) {
        const charEl = str[i]

        if (!isNaN(str[i + 1])) {
            for (let j = 0; j < Number(str[i + 1]); j++) {
                res += charEl
            }
        } else {
            if (isNaN(str[i])) {
                res += charEl
            }
        }
    }

    return res
}

console.log(decompress(compress(str)))
