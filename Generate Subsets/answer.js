function generateSubsets(arr) {
    const result = []
    const n = arr.length

    function generate(current, index) {
        if (index === n) {
            result.push(current)
            return
        }

        generate([...current, arr[index]], index + 1)
        generate(current, index + 1)
    }

    generate([], 0)

    result.forEach(subset => console.log(subset.join(" ")))
}

generateSubsets([1, 5, 3])
