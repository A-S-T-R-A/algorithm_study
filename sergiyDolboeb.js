const arr = [6, 1, 2, 3, 4, 1, 2, 3, 4, 100000, 99999]
const slovarik = { 6: 1, 1: 2, 2: 2, 3: 2, 4: 2, 100000: 1, 99999: 1 }
const distinctNumbers = 7
const l = [11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sergiyDolboeb(arr, l) {
    const storage = []
    const slovarik = {}
    let distinctNumbers = 0
    const answ = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in slovarik) {
            slovarik[arr[i]]++
        } else {
            distinctNumbers++
            slovarik[arr[i]] = 1
        }
    }

    storage.push(distinctNumbers)

    for (let i = 1; i < arr.length; i++) {
        if (slovarik[arr[i - 1]] - 1 === 0) {
            distinctNumbers -= 1
        }
        slovarik[arr[i - 1]] -= 1
        storage.push(distinctNumbers)
    }

    for (let i = 0; i < l.length; i++) {
        answ.push(storage[l[i] - 1])
    }

    return answ
}

console.log(sergiyDolboeb(arr, l))
