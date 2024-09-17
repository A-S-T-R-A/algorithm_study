const str = "cabcbaa"
/**
 * abbac
 * cbcb //cbbc bccb
 * mama // true
 *
 * літери повинні бути парними, якщо існує одна літера без пари
 *
 * {a:2, b:2, c:1}
 *
 */

function isPalindrom(str) {
    const obj = {}

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1
        }
    }

    let count = 0

    Object.entries(obj).forEach(([_, value]) => {
        if (value % 2 !== 0) {
            count++
        }
    })

    if (count > 1) return false

    return true
}

console.log(isPalindrom(str))
