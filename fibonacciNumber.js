// num = num[i-2] + num [i-1]
const n = 5 // 5

function fibonacciNumber(n) {
    const storage = [0, 1]

    for (let i = 2; i <= n; i++) {
        storage.push(storage[i - 2] + storage[i - 1])
    }

    return storage[n]
}

console.log(fibonacciNumber(n))

// 4
// 1 1 1
// 1 2
// 2 1

//
