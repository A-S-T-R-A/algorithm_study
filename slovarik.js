const arr = [1, 2, 4, 1, 2, 3, 0, 1, 2, 1, 3, 4]

// 0 4 3 2 1

function slovarik(arr) {
    const obj = {}
    const answ = []

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }

    const newArr = Object.entries(obj).sort((a, b) => a[1] - b[1])

    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i][0])
        answ.push(newArr[i][0])
    }

    return answ
}

console.log(slovarik(arr))
