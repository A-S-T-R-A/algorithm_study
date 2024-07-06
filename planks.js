// Бинарный поиск по ответу
const quantity = 4
const arrPlanks = [5, 2, 3, 7, 10] // answ max plank length 4

function isPossible(plankL, quantity, arr) {
    let planks = arr.reduce((acc, val) => {
        return acc + Math.floor(val / plankL)
    }, 0)

    return planks >= quantity
}
//;(arr = [100, 1]), (quantity = 1) // ANS: 100

function findMaxLength(arr, quantity) {
    let l = 0
    let r = Math.max(...arr) + 1

    while (r - l > 1) {
        const middle = Math.floor((l + r) / 2)

        console.log("step", l, r, middle, isPossible(middle, quantity, arr))
        if (isPossible(middle, quantity, arr)) {
            l = middle
        } else {
            r = middle
        }
    }

    return l
}

console.log(findMaxLength(arrPlanks, quantity))

// O(NlogN)
// O(logMAX * N)
// [0, 11] -> [5, 11] -> [5, 8] -> [5, 6]
// log_2(r - l) = log_2(Math.max(..)+1) --> log of Max element --> logMAX

// YES binary search:
// T T T T T F F F F F F F F F
// F F F F F T T T T T T T T T

// NO binary search:
// T T T F F T T F F T T T
