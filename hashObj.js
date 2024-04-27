class Astrobject {
    arr
    MAX_NUMB

    constructor() {
        this.MAX_NUMB = 101
        this.arr = new Array(this.MAX_NUMB).fill(undefined).map(() => [])
    }

    castStringToInt(str) {
        const sum = str.split("").reduce((acc, value) => acc + value.charCodeAt(), 0)

        return sum % this.MAX_NUMB
    }

    set(key, value) {
        const newKey = this.castStringToInt(key)
        const index = this.arr[newKey].findIndex(([itemKey]) => itemKey === key)
        if (index === -1) {
            this.arr[newKey].push([key, value])
        } else {
            this.arr[newKey][index][1] = value
        }
    }

    get(key) {
        const newKey = this.castStringToInt(key)
        if (!!this.arr[newKey]) {
            return this.arr[newKey][1]
        }
        return undefined
    }

    delete(key) {}

    getAll() {
        return this.arr.filter(item => Boolean(item))
    }

    getAllKeys() {}
}

const astraObj = new Astrobject()

astraObj.set("abc", "world")
astraObj.set("abc", "hello")
astraObj.set("acb", "hello1")
astraObj.set("acb", "hello2")

// astraObj.set("1", "1")
// console.log(astraObj.get("hello"))

console.log(astraObj.arr)

// console.log(astraObj.castStringToInt("acb"))
// console.log(astraObj.castStringToInt("abc"))
// console.log(astraObj.castStringToInt("bca"))
// console.log(astraObj.castStringToInt("cba"))
// console.log(astraObj.castStringToInt("cab"))
// console.log(astraObj.castStringToInt("bac"))
// console.log(astraObj.castStringToInt("g"))
