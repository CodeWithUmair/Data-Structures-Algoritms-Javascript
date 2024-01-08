// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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
    return array;
  }
  insert(index, value) {
    //Check Params
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = new Node(value);
    const leaderNode = this.traverseToIndex(index - 1);
    const holderPointer = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = holderPointer;
    this.length++;
    return this.printList();
  }
  delete(index) {
    //Check Params
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    // Check if index is out of bounds
    if (index >= this.length) {
      console.error("Index out of bounds. Cannot delete.");
      return this.printList();
    }

    const leaderNode = this.traverseToIndex(index - 1);
    const holderPointer = leaderNode.next;
    leaderNode.next = holderPointer.next;
    this.length--;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(100, 990);
myLinkedList.insert(20, 88);
myLinkedList.delete(6);
console.log(myLinkedList.printList());
console.log(myLinkedList.length);
