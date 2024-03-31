class LinkedList {
    list
    size
    first
    last

    constructor() {
        this.last = 0
        this.size = 0
        this.list = {}
    }

    append(el) {
        if (this.last in this.list) {
            this.list[this.last].next = ++this.last
            this.list[this.last] = { value: el, next: null }
        } else {
            this.list[this.last] = { value: el, next: null }
            this.first = this.last
        }
        this.size++
    }

    getFirst() {
        if (this.first !== undefined) {
            return this.list[this.first].value
        }

        return "pawol nahyi sperva append use"
    }
    removeFirst() {}
    getNth(index) {
        let ref = this.first
        for (let i = 0; i < index; i++) {
            const obj = this.list[ref]
            ref = obj.next
        }

        return this.list[ref].value
    }
    removeNth() {}

    getLast() {
        if (this.list[this.last] !== undefined) {
            return this.list[this.last].value
        }
        return ".i."
    }
    removeLast() {}

    getSize() {
        return this.size
    }

    getAll() {
        const arrList = []
        let ref = this.first

        while (ref !== null) {
            const el = this.list[ref]
            arrList.push(el.value)
            ref = el.next
        }

        return arrList
    }
}

const linkedList = new LinkedList()

console.log(linkedList.getFirst())
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(5)
console.log(linkedList.getFirst())
console.log(linkedList.getSize(), "getSize")
console.log(linkedList.getLast())
console.log(linkedList.getNth(2))
// console.log(linkedList.getAll())
// console.log(linkedList.list)
