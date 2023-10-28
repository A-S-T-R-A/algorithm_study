function generateSequences(n) {
    const stack = []
    stack.push({ n, prefix: "" })

    while (stack.length > 0) {
        const { n, prefix } = stack.pop()

        if (n === 0) {
            console.log(prefix)
        } else {
            if (prefix.slice(-1) !== "1") {
                stack.push({ n: n - 1, prefix: prefix + "1" })
            }
            stack.push({ n: n - 1, prefix: prefix + "0" })
        }
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
