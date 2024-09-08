// all keys and values are strings
// set (key, value): void // if we already have the same key we should change for new value
// delete (key): void // if key doesnt exist throw new Error
// get by key (key): value // if key doesnt exist return undefined
// getall (): [key, value] // if we have empty obj we should return []

// [ [key,value], [key,value], [key,value] ]

class Astrobject {
    arr

    constructor() {
        this.arr = []
    }

    // O(n)
    set(key, value) {
        let isPresent = false
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i][0] === key) {
                this.arr[i][1] = value
                isPresent = true
            }
        }
        if (!isPresent) {
            this.arr.push([key, value])
        }
    }

    // O(n)
    get(key) {
        for (let i = 0; i < this.arr.length; i++) {
            const arrKey = this.arr[i][0]
            const arrValue = this.arr[i][1]
            if (arrKey === key) return arrValue
        }

        return undefined
    }

    // O(n)
    delete(key) {
        const keyIndex = this.arr.findIndex(([keyArr]) => keyArr === key)
        if (keyIndex === -1) throw new Error("Key doesn't exist")
        this.arr.splice(keyIndex, 1)
    }

    // O(n)
    getAll() {
        return this.arr
    }

    getAllKeys() {
        return this.arr.map(([key]) => key)
    }
}

const astraObj = new Astrobject()

astraObj.set("1", "5")
astraObj.set("hello", "world")

console.log(astraObj.get("1"))
console.log(astraObj.get("hello"))
try {
    astraObj.delete("3")
} catch (error) {
    console.log(error)
}

try {
    astraObj.delete("hello")
} catch (error) {
    console.log(error)
}

console.log(astraObj.getAll())

astraObj.set("hello2", "world2")

console.log(astraObj.getAllKeys())
