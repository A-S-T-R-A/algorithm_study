const n = 1000
const w = 1
const h = 1

// res = 32

// w 2
// h 3
// n 5
// squareSide 10

// Can we fit N rectangles into the square with side squareSide?
function isPossible(squareSide, n, w, h) {
    const maxRectangles = Math.floor(squareSide / w) * Math.floor(squareSide / h)
    if (n <= maxRectangles) return true

    return false
}

function calculateSquareSide(n, w, h) {
    let l = 0
    let r = Math.min(w, h) * n

    while (r - l > 1) {
        let middle = Math.floor((l + r) / 2)

        if (isPossible(middle, n, w, h)) {
            r = middle
        } else {
            l = middle
        }
    }

    return r
}

console.log(calculateSquareSide(5, 2, 3))

// L                             R
// F F F F F F F F T T T T T T T T
//.              L R
// R - L = 1
