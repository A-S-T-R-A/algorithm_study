const q = 4
const p1 = 3
const p2 = 5

function isPossible(seconds, quantity, p1, p2) {
    const qp1 = Math.floor(seconds / p1)
    const qp2 = Math.floor(seconds / p2)

    return qp1 + qp2 >= quantity
}

function findMinSeconds(q, p1, p2) {
    let l = 0
    let r = Math.min(p1, p2) * q

    while (r - l > 1) {
        const middle = Math.floor((l + r) / 2)

        if (isPossible(middle, q, p1, p2)) {
            r = middle
        } else {
            l = middle
        }
    }

    return r
}

console.log(findMinSeconds(q, p1, p2))
