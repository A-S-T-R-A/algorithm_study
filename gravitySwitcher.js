const arr = [3, 2, 1, 2]

function gravitySwitcher(arr) {
    return arr.sort((a, b) => a - b)
}

console.log(gravitySwitcher(arr))
