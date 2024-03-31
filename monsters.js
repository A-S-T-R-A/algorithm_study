const monsters = [9, 3, 2, 1, 7, 0, 4, 3, 7]
const answer = [1, 2, 3, 4, 2, 3, 3, 4, 2]

function killerMonsters(arr) {
    const stack = []
    const answer = []

    arr.forEach(el => {
        while (stack.length > 0 && stack[stack.length - 1] <= el) {
            stack.pop()
        }

        stack.push(el)
        answer.push(stack.length)
    })

    return answer
}

console.log(killerMonsters(monsters))
