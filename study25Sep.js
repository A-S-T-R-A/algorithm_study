const str = "abcdbcde"
const change = ["bcd", "xy"] // axyxye

// [a,bcd, e]

/**
 *  '' - 'dsadsa' 'dsa' = ''
 * 'abbcde - 'bcd' 'xy' = abxye
 * 'abc' - 'abc' 'cba' = 'cba'
 */

function solve(str, change) {
    const from = change[0]
    const to = change[1]
    const res = []

    for (let i = 0; i < str.length; i++) {
        const el = str[i]

        if (el !== from[0]) {
            res.push(el)
        } else {
            const tempStr = str.slice(i, i + from.length)

            if (tempStr === from) {
                res.push(tempStr)
                i += from.length - 1
            } else {
                res.push(el)
            }
        }
    }

    for (let i = 0; i < res.length; i++) {
        const el = res[i]
        if (el === from) {
            res[i] = to
        }
    }

    return res.join("")
}

console.log(solve(str, change))
