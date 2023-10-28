function getPermutations(n) {
    const initialArray = []
    for (let i = 1; i <= n; i++) {
        initialArray.push(i)
    }

    // Define a recursive function to generate permutations.
    function generate(arr, n) {
        // Base case: If n is 0, print the current permutation.
        if (n === 0) {
            console.log(arr.join(" "))
        } else {
            for (let i = 0; i < n; i++) {
                // Swap elements arr[i] and arr[n-1].
                const temp = arr[i]
                arr[i] = arr[n - 1]
                arr[n - 1] = temp

                // Recursively generate permutations for the remaining elements.
                generate(arr, n - 1)

                // Backtrack by returning elements to their original positions.
                const temp2 = arr[i]
                arr[i] = arr[n - 1]
                arr[n - 1] = temp2
            }
        }
    }

    // Start generating permutations from the initial array.
    generate(initialArray, n)
}

getPermutations(3)
