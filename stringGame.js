const t = "ababcba"
const p = "abb"
const arr = [5, 3, 4, 1, 7, 6, 2]

function isPossible(t, arr, indx, p) {
    let word = t

    for (let i = 0; i <= indx; i++) {
        word = replaceAt(word, arr[i] - 1, "*")
    }

    return canObtainWord(word, p)
}

function canObtainWord(t, p) {
    let j = 0
    for (let i = 0; i < t.length; i++) {
        if (p[j] === t[i]) {
            j++
            if (p.length === j) return true
        }
    }

    return false
}

function replaceAt(str, index, char) {
    return str.substring(0, index) + char + str.substring(index + 1)
}

function stringGame(t, p, arr) {
    let l = 0
    let r = arr.length

    while (r - l > 1) {
        const middle = Math.floor((l + r) / 2)

        if (isPossible(t, arr, middle, p)) {
            l = middle
        } else {
            r = middle
        }
    }

    return r
}

console.log(stringGame(t, p, arr))
