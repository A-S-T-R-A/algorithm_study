class Stack {
    stack
    minNumbers

    constructor() {
        this.stack = []
        this.minNumbers = []
    }

    add(num) {
        const lastMinNumber = this.minNumbers[this.minNumbers.length - 1]
        if (lastMinNumber === undefined || lastMinNumber >= num) {
            this.minNumbers.push(num)
        }
        this.stack.push(num)
    }

    delete() {
        const deletedNumber = this.stack.pop()
        if (deletedNumber === this.minNumbers[this.minNumbers.length - 1]) {
            this.minNumbers.pop()
        }

        return deletedNumber
    }

    getMinNumber() {
        console.log(this.minNumbers)
        console.log(this.stack)
        return this.minNumbers[this.minNumbers.length - 1]
    }
}

const stack = new Stack()

stack.delete()
stack.add(10)
stack.add(10)
stack.add(3)
stack.add(2)
stack.add(2)
stack.delete()
console.log(stack.getMinNumber())
