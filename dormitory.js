// 10 15 12
// conv = 10 25 37
// 1 9 12 23 26 37

// to find num of apparts 12 - 10

/* 
1 1
1 9
2 2
2 13
3 1
3 12
*/

const dorms = [10, 15, 12]
const apparts = [1, 9, 12, 23, 26, 37]

function dormitory(dorms, apparts) {
    let convertedDorms = []
    // convertedDorms = 10 25 37
    const roomNumbers = []

    for (let i = 0; i < dorms.length; i++) {
        if (i === 0) {
            convertedDorms.push(dorms[i])
        } else {
            convertedDorms.push(convertedDorms[i - 1] + dorms[i])
        }
    }

    for (let i = 0; i < apparts.length; i++) {
        for (let j = 0; j < convertedDorms.length; j++) {
            if (j === 0 && apparts[i] <= convertedDorms[j]) {
                roomNumbers.push([j + 1, apparts[i]])
            }

            if (j > 0 && apparts[i] > convertedDorms[j - 1] && apparts[i] <= convertedDorms[j]) {
                const domNum = apparts[i] - convertedDorms[j - 1]
                roomNumbers.push([j + 1, domNum])
            }
        }
    }

    return roomNumbers
}

console.log(dormitory(dorms, apparts))
