"use strict";

class Stack {
  constructor(maxSize = 10, ...args) {
    // rest
    this._maxSize = maxSize;
    this._size = 0;
    this.push(...args); //spread
  }
  get isEmpty() {
    return this._size === 0;
  }
  get size() {
    return this._size;
  }
  push(...args) {
    for (let key of args) {
      if (this.size >= this._maxSize) {
        throw new RangeError("Stack overlow");
      }
      this[`_${this.size}`] = key;
      this._size++;
    }
    return this.size;
  }
  pop() {
    if (this.size <= 0) {
      return;
    }
    const lastItem = this[`_${this.size - 1}`];
    delete this[`_${this.size - 1}`];
    this._size--;
    return lastItem;
  }
  pip() {
    return this[`_${this.size - 1}`];
  }
}

// const stack = new Stack(15,'val1','va2',3,4,5);
// stack.push(6,7,8,9,10);
// console.log(stack);

//================================>
function checkSquence(str) {}
//======================================>
