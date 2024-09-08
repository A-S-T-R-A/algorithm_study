const strings = [2, 2, 4, 4] // answ 6

function evenSubstrings(strs) {
    let count = 0

    for (let j = 0; j < strs.length; j++) {
        const el = strs[j]
        if (el % 2 === 0) {
            count = count + j + 1
        }
    }

    return count
}

console.log(evenSubstrings(strings))
