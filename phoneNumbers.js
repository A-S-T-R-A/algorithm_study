const numbers = "0011223344556677889988"

function phoneNumbersCount(n) {
    const tempNum = Math.floor(n.length / 11)
    let eightCount = 0

    if (tempNum < 1) return "lox"

    for (let i = 0; i < n.length; i++) {
        if (n[i] === "8") {
            eightCount += 1
        }
    }

    console.log(tempNum, eightCount)

    return Math.min(tempNum, eightCount)
}

console.log(phoneNumbersCount(numbers))
