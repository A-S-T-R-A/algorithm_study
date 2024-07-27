const cities = 4 // answ 2.8
const population = 999998
const millionMillionDolarovSWAAAAA = 1000000
const citiesArr = [
    [1, 1, 1],
    [2, 2, 1],
    [3, 3, 1],
    [2, -2, 1],
]

function occupationTerritory(popul, arr) {
    let population = popul

    const sortedArr = arr.sort(
        (a, b) => Math.pow(a[0], 2) + Math.pow(a[1], 2) - (Math.pow(b[0], 2) + Math.pow(b[1], 2))
    )

    for (let i = 0; i < sortedArr.length; i++) {
        population += sortedArr[i][2]

        if (population >= millionMillionDolarovSWAAAAA) {
            return Math.sqrt(Math.pow(sortedArr[i][0], 2) + Math.pow(sortedArr[i][1], 2))
        }
    }

    return "Not enough body count"
}

console.log(occupationTerritory(population, citiesArr))
