const sushiSet = [2, 2, 1, 1, 1, 2, 2, 2, 2]

function sushiMaster(arr) {
    const sushiForBoth = []
    let sushiForArkadiy = 0
    let sushiForAnna = 0

    let result = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            sushiForArkadiy += 1

            if (i === arr.length - 1 || arr[i + 1] !== 1) {
                sushiForBoth.push(sushiForArkadiy)
                sushiForArkadiy = 0
            }
        } else if (arr[i] === 2) {
            sushiForAnna += 1

            if (i === arr.length - 1 || arr[i + 1] !== 2) {
                sushiForBoth.push(sushiForAnna)
                sushiForAnna = 0
            }
        }
    }

    for (let i = 0; i < sushiForBoth.length - 1; i++) {
        let tempNum = Math.min(sushiForBoth[i], sushiForBoth[i + 1])

        if (tempNum > result) {
            result = tempNum
        }
    }

    return result + result
}

console.log(sushiMaster(sushiSet))
