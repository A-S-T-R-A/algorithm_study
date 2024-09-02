const dots = [-3, -2, -2, -1, 0]
const maxDistance = 2

function dotsOnTheLine(dots, maxDistance) {
    let res = 0

    for (let i = 0; i < dots.length; i++) {
        // for (let j = i + 1; j < dots.length; j++) {
        for (let k = i + 2; k < dots.length; k++) {
            if (dots[k] - dots[i] <= maxDistance) {
                const abc = k - i - 1
                res += abc
            }
        }
        // }
    }

    return res
}

console.log(dotsOnTheLine(dots, maxDistance))
