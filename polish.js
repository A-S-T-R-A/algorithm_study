const expression = "3 2 4 - *"

function evaluate(str) {
    const arr = str.split(" ")
    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            result.push(Number(arr[i]))
        } else {
            const y = result.pop()
            const x = result.pop()

            if (arr[i] === "+") {
                result.push(x + y)
            }
            if (arr[i] === "*") {
                result.push(x * y)
            }
            if (arr[i] === "-") {
                result.push(x - y)
            }
        }
    }

    return result[0]
}

console.log(evaluate("2 4 -"))

function mathParser(x, y, operator) {
    if (operator === "*") {
        return x * y
    }

    if (operator === "+") {
        return x + y
    }
}

function evaluate(str) {
    const arr = str.split(" ")
    const result = []

    arr.forEach(item => {
        if (Number(item)) {
            result.push(Number(item))
        } else {
            const x = result.pop()
            const y = result.pop()

            result.push(mathParser(x, y, item))
        }
    })

    return result[0]
}

console.log(evaluate(expression))
