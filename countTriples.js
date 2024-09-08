const arr = [2, 2, 6, 7, 4] // 2
// (1, 2, 3): 1 + 2 = 3
// (2, 3, 5): 2 + 3 = 5
/**
 * -1,-2,0,1 // (-1,1,0) = 2
 * -4, 1, 2 , -3 , -1 ,-2 // (-1,-2, -3)-(-3, -1, -4)-(2, -3, -1)-(-3, 1, -2)-(2,-1,1)-(2,-4, -2)-(1, -4, -3) = 7
 * 1,2,3 // 1
 * 10, 20, 30 / 1
 * [] // 0
 *
 * [1] // 0
 * [1,2]  // 0
 */

function countTriples(arr) {
    let res = 0
    const obj = {}

    if (arr.length < 2) return res

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j]
            if (sum !== arr[i] && sum !== arr[j]) {
                if (sum in obj) {
                    obj[sum] += 1
                } else {
                    obj[sum] = 1
                }
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            res += obj[arr[i]]
        }
    }

    return res
}

console.log(countTriples(arr))

/**
 * 0,1,2  // 0
 * 0,1,1,2 // 3
 * 0,1,1,2,2 // 6
 * 0,0,1,1 // 4
 * 0,0,0, // 3
 *0, 0, 1, -1
 */

/* 
 for(let i=0; ...)
   let counter = 0
   for(let j=0; j<arr.length; i++)
     for(let k=0;...)
 */

// 1 2 3 4 5

// 1 1 1 2 2 3 4
// 1 1 2
// 1 2 3
// 1 3 4
// 2 2 4

/**
 *
 * set -- for the first iteration
 *
 */

/**
 *
 * 1 + 3 + .. + (2*n-3) = (n - 1) * (n - 1) = n*n-n-n+1=n*n-2n+1 --- предположим что это правда
 * 1 + 3 + .. + (2*n-3) = n*n - 2n + 1 ---это правда | + (2*n-1) к обоим сторонам
 * 1 + 3 + .. + (2*n-3) + (2*n-1) = n * n - 2n + 1 + 2n - 1 = n*n
 * 1 + 3 + .. + (2*n-3) + (2*n-1) = n*n --- нужно доказать
 *
 */
