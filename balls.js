const arr = [5, 1, 1, 4, 4, 4, 1, 5, 5, 4, 2, 2, 2]

function balls(arr) {
    const stack = []

    arr.forEach(el => {
        stack.push(el)

        const l = stack.length

        if (l < 3) return

        const isTripple = stack[l - 1] === stack[l - 2] && stack[l - 1] === stack[l - 3]
        if (isTripple) {
            stack.pop()
            stack.pop()
            stack.pop()
        }
    })

    return stack
}

function removeTrippleOcassions(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
            i += 2
        } else {
            result.push(arr[i])
        }
    }

    return result
}

console.log(balls(arr))
