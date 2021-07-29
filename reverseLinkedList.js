class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  printList() {
    const list = [];
    let node = this.head;
    while (node.next) {
      list.push(node.value);
      node = node.next;
    }
    list.push(node.value);
    console.log(list);
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index < 1) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    let targetNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      targetNode = targetNode.next;
    }
    newNode.next = targetNode.next;
    targetNode.next = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index > this.length - 1 || index < 0) {
      console.log("Out of bounds");
      return this.printList();
    }
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    let targetNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      targetNode = targetNode.next;
    }
    if (index === this.length - 1) {
      this.tail = targetNode;
      targetNode.next = null;
      this.length--;
      return this.printList();
    } else {
      targetNode.next = targetNode.next.next;
      this.length--;
      return this.printList();
    }
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
myLinkedList.insert(5, "hi");

myLinkedList.remove(3);
myLinkedList.reverse();
