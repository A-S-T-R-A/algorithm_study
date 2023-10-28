function generateSubsets(arr) {
    const result = []

    function generate(current = [], index = 0) {
        if (index === arr.length) {
            result.push(current)
            return
        }

        generate([...current, arr[index]], index + 1)
        generate(current, index + 1)
    }

    generate()

    return result.map(item => item.join(" ")).join("\n")
}

console.log(generateSubsets([1, 5, 3]))
