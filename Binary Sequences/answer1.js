function generateSequences(n, prefix = "") {
    if (n === 0) {
        console.log(prefix)
    } else {
        generateSequences(n - 1, prefix + "0")

        if (prefix.slice(-1) !== "1") generateSequences(n - 1, prefix + "1")
    }
}

generateSequences(3)
// 000
// 001
// 010
// 100
// 110
// 011
// 101
// 111
