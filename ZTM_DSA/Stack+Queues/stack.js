class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }
  add(value) {
    this.array.push(value);
    return this;
  }
  remove() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();

console.log(myStack.add("google"));
console.log(myStack.add("ZTM"));
console.log(myStack.add("umair"));
console.log(myStack.peek());
console.log(myStack.remove());
console.log(myStack.remove());
//Discord
//ZTM
//google

////////////////////////////////////////////////////////////////////////////////////

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(value) {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   peek() {
//     return this.top.value;
//   } // Big-O(1)

//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     return this;
//   } // Big-O(1)

//   pop() {
//     if (this.length !== 0) {
//       return null;
//     }
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }

//     // const holdingPointer = this.top;
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   } // Big-O(n)
// }

// const myStack = new Stack();

// console.log(myStack.push("google"));
// console.log(myStack.push("ZTM"));
// console.log(myStack.push("umair"));
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.pop());
// //Discord
// //ZTM
// //google
