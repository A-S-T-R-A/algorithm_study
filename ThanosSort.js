const arr = [1, 2, 4, 5, 7, 8, 9, 10]

function thanosSort(arr) {
    let res = 1

    for (let step = 2; step <= arr.length; step *= 2) {
        // log
        for (let i = 0; i < arr.length; i += step) {
            // n
            let isSorted = true

            for (let j = i; j < i + step - 1; j++) {
                // n
                if (arr[j] > arr[j + 1]) {
                    isSorted = false
                    break
                }
            }

            if (isSorted) {
                res = step
            }
        }
    } // n * log

    return res
}

console.log(thanosSort(arr))
