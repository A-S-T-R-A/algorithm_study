class Queue {
    _q
    start

    constructor() {
        this._q = []
        this.start = undefined
    }

    getFirst() {
        if (this.start === undefined) {
            return undefined
        }

        return this._q[this.start]
    }

    getAll() {
        return this._q.slice(this.start)
    }

    popFirst() {
        const v = this._q[this.start]
        this.start++

        return v
    }

    append(el) {
        if (this.start === undefined) {
            this.start = 0
        }

        this._q.push(el)
    }

    size() {
        return this._q.length - this.start
    }
}

// const queue = new Queue()

// queue.append(2)
// queue.append(3)
// queue.popFirst()
// queue.popFirst()
// queue.append(2)
// queue.append(4)

// console.log(queue.getAll())
// console.log(queue.size())
