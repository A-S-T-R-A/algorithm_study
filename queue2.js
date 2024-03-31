class Queue {
    s1
    s2

    constructor() {
        this.s1 = []
        this.s2 = []
    }

    getFirst() {
        if (!this.s1.length) {
            this.s1 = this.s2.toReversed()
            this.s2 = []
        }

        return this.s1[this.s1.length - 1]
    }

    getAll() {
        return [...this.s1.toReversed(), ...this.s2]
    }

    popFirst() {
        if (!this.s1.length) {
            this.s1 = this.s2.toReversed()
            this.s2 = []
        }

        return this.s1.pop()
    }

    append(el) {
        this.s2.push(el)
    }

    size() {
        return this.s1.length + this.s2.length
    }
}

const queue = new Queue()

queue.append(1)
queue.append(2)
queue.append(3)
console.log(queue.getFirst())
queue.append(4)
queue.append(5)
console.log(queue.getAll())
console.log(queue.getFirst())
// console.log(queue.getFirst()) // 1
// console.log(queue.popFirst())
// console.log(queue.getFirst()) // 3
// console.log(queue.popFirst())
// console.log(queue.getFirst()) // 5
// console.log(queue.popFirst())
