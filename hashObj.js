class Astrobject {
    arr
    MAX_NUMB

    constructor() {
        this.MAX_NUMB = 101
        this.arr = new Array(this.MAX_NUMB).fill(undefined)
    }

    castStringToInt(str) {
        return str.length % this.MAX_NUMB
    }

    set(key, value) {
        const newKey = this.castStringToInt(key)
        this.arr[newKey] = [key, value]
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

astraObj.set("hello", "world")
astraObj.set("1", "1")

console.log(astraObj.get("hello"))

console.log(astraObj.getAll())
