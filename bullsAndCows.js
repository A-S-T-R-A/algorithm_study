const secret = "1123"
const guess = "0111"
// result "1A3B"
function bullsAndCows(secret, guess) {
    let bulls = 0
    let cows = 0

    for (let i = 0; i < secret.length - 1; i++) {
        if (secret[i] === guess[i]) {
            bulls++
        }

        if (secret[0] === guess[i]) {
            cows++
        }
        if (secret[1] === guess[i]) {
            cows++
        }
        if (secret[2] === guess[i]) {
            cows++
        }
        if (secret[3] === guess[i]) {
            cows++
        }
    }

    return `${bulls}A${cows}B`
}

console.log(bullsAndCows(secret, guess))
