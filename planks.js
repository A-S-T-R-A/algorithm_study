const quantity = 4
const arrPlanks = [5, 2, 3, 7, 9] // answ max plank length 4

function isPossible(plankL, quantity, arr) {
    let planks = arr.reduce((acc, val) => {
        return acc + Math.floor(val / plankL)
    }, 0)

    return planks >= quantity
}

console.log(isPossible(1, quantity, arrPlanks), "1")
console.log(isPossible(2, quantity, arrPlanks), "2")
console.log(isPossible(3, quantity, arrPlanks), "3")
console.log(isPossible(4, quantity, arrPlanks), "4")
console.log(isPossible(5, quantity, arrPlanks), "5")
console.log(isPossible(6, quantity, arrPlanks), "6")
console.log(isPossible(7, quantity, arrPlanks), "7")
console.log(isPossible(8, quantity, arrPlanks), "8")
console.log(isPossible(9, quantity, arrPlanks), "9")
console.log(isPossible(10, quantity, arrPlanks), "10")
