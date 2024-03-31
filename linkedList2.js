class LinkedList {
  size;
  first;
  last;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  append(el) {
    const node = {
      value: el,
      next: null,
    };

    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  concat(list) {
    if (!(list instanceof LinkedList)) {
      throw new Error("Oops");
    }

    if (this.first === null) {
      this.first = list.first;
    } else {
      this.last.next = list.first;
    }
    this.size += list.size;
  }

  getFirst() {}

  removeFirst() {}

  getNth(index) {}

  removeNth() {}

  getLast() {}

  removeLast() {}

  getSize() {}

  getAll() {
    const listAsArray = [];

    let currentNode = this.first;

    while (currentNode !== null) {
      listAsArray.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return listAsArray;
  }
}

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();

linkedList1.append(2);
linkedList1.append(2);
linkedList1.append(8);
console.log("list 1: ", linkedList1.getAll());

linkedList2.append(3);
linkedList2.append(2);
linkedList2.append(2);
console.log("list 2: ", linkedList2.getAll());

linkedList1.concat(linkedList2);
console.log("list concat: ", linkedList1.getAll());
