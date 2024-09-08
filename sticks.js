// const arr = [1, 1, 1, 2, 2, 3, 4, 5]

function checkSquare(arr) {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1
        } else {
            obj[arr[i]] = 1
        }
    }

    const values = Object.values(obj)

    const isTrue = values.some(item => item >= 4)

    return isTrue
}

// console.log(checkSquare(arr), "answ")

function checkRectangle(arr) {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1
        } else {
            obj[arr[i]] = 1
        }
    }

    const values = Object.values(obj)
    const acc = values.reduce((acc, value) => (acc += Math.floor(value / 2)), 0)

    return acc >= 2
}

// console.log(checkRectangle(arr))

const arr = [1, 5, 10, 2, 5]

function checkTriangle(arr) {
    arr.sort((a, b) => b - a)

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] < arr[i + 1] + arr[i + 2]) return true
    }

    return false
}

console.log(checkTriangle(arr))
