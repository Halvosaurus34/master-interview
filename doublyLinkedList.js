class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      previous: null,
    };
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      previous: null,
    };
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    if (index < 1) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = {
      value: value,
      next: null,
      previous: null,
    };
    let targetNode = this.traverse(index, index <= this.length / 2);
    newNode.next = targetNode.next;
    newNode.previous = targetNode;
    targetNode.next = newNode;
    this.length++;
    return this.printList();
  }

  traverse(index, direction) {
    let headNode = this.head;
    let tailNode = this.tail;
    if (direction) {
      for (let i = 0; i < index - 1; i++) {
        headNode = headNode.next;
      }
      return headNode;
    } else {
      for (let i = this.length - 1; i > index - 1; i--) {
        tailNode = tailNode.previous;
      }
      return tailNode;
    }
  }

  remove(index) {
    // Check Parameters
    if (index >= this.length || index < 0) {
      console.log("out of range");
      return this.printList();
    }
    if (index === 0) {
      this.head.next.previous = null;
      this.head = this.head.next;
      return this.printList();
    }
    const leader = this.traverse(index, index <= this.length / 2);
    leader.next = leader.next.next;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(21, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(0);
