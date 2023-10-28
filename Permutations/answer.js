function getPermutations(n) {
    const initialArray = []
    for (let i = 1; i <= n; i++) {
        initialArray.push(i)
    }

    function generate(arr, n) {
        if (n === 0) {
            console.log(arr.join(" "))
        } else {
            for (let i = 0; i < n; i++) {
                // Обмениваем элементы arr[i] и arr[n-1]
                const temp = arr[i]
                arr[i] = arr[n - 1]
                arr[n - 1] = temp

                generate(arr, n - 1)

                // Возвращаем элементы на свои места
                const temp2 = arr[i]
                arr[i] = arr[n - 1]
                arr[n - 1] = temp2
            }
        }
    }

    generate(initialArray, n)
}

getPermutations(3)
