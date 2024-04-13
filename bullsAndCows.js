const secret = "112323"
const guess = "011123"
// result "1A1B"
function bullsAndCows(secret, guess) {
    let secretObj = {} // 123
    let guessObj = {} // 011
    let bulls = 0
    let cows = 0

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++
        } else {
            if (secretObj[secret[i]]) {
                secretObj[secret[i]]++
            } else {
                secretObj[secret[i]] = 1
            }

            if (guessObj[guess[i]]) {
                guessObj[guess[i]]++
            } else {
                guessObj[guess[i]] = 1
            }
        }
    }

    for (let i = 0; i < 10; i++) {
        if (secretObj[i] && guessObj[i]) {
            cows += Math.min(secretObj[i], guessObj[i])
        }
    }

    return `${bulls}B${cows}C`
}

console.log(bullsAndCows(secret, guess))
