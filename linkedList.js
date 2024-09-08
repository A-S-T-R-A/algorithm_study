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
            this.list[this.last].next = this.last + 1
            this.list[this.last + 1] = { value: el, next: null, prev: this.last }
            this.last++
        } else {
            this.list[this.last] = { value: el, next: null, prev: null }
            this.first = this.last
        }
        this.size++
    }

    appendLinkedList(list) {
        const listArr = list.getAll()
        listArr.forEach(item => this.append(item))
    }

    getFirst() {
        if (this.first !== undefined) {
            return this.list[this.first].value
        }

        return "pawol nahyi sperva append use"
    }
    removeFirst() {
        const ref = this.first
        this.first = this.list[ref].next
        this.list[this.first].prev = null
        delete this.list[ref]
        this.size--
    }

    getNth(index) {
        let ref = this.first
        for (let i = 0; i < index; i++) {
            const obj = this.list[ref]
            ref = obj.next
        }

        return this.list[ref].value
    }

    removeNth(index) {
        if (index === 0) {
            this.removeFirst()
            return
        }
        if (index === this.size - 1) {
            this.removeLast()
            return
        }
        let ref = this.first
        for (let i = 0; i < index; i++) {
            const obj = this.list[ref]
            ref = obj.next
        }
        let next = this.list[ref].next
        let prev = this.list[ref].prev
        if (prev !== null) {
            this.list[prev].next = next
        }
        if (next !== null) {
            this.list[next].prev = prev
        }
        delete this.list[ref]
        this.size--
    }

    getLast() {
        if (this.list[this.last] !== undefined) {
            return this.list[this.last].value
        }
        return "8============Э"
    }

    removeLast() {
        const ref = this.last
        this.last = this.list[ref].prev
        this.list[this.last].next = null
        delete this.list[ref]
        this.size--
    }

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

const linkedList2 = new LinkedList()

linkedList.append(1) // 5
linkedList.append(2) // 5 2
linkedList.append(3) // 5 2 3

linkedList2.append(4) // 5
linkedList2.append(5) // 5 2
linkedList2.append(6) // 5 2 3

linkedList.appendLinkedList(linkedList2)
console.log(linkedList.list) // 1,2,3,4,5,6
linkedList.removeNth(4)
console.log(linkedList.list)
