class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    console.log(this.top);
    return this.top;
  }
  push(value) {
    if (this.isEmpty()) {
      const newNode = new Node(value);
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.length++;
    }
    return this;
  }
  pop() {
    this.top = this.top.next;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop();
myStack.peek();
// console.log(myStack);
//Discord
//Udemy
//google
