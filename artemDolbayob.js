const n = 1000000

function isPossible(v, n) {
    let num = 0
    for (let i = 1; i <= v; i++) {
        num += Math.floor(v / i)
    }

    return num >= n
}

function findMinTasks(n) {
    let l = 0
    let r = n

    while (r - l > 1) {
        const middle = Math.floor((l + r) / 2)

        if (isPossible(middle, n)) {
            r = middle
        } else {
            l = middle
        }
    }

    return r
}

console.log(findMinTasks(n))
