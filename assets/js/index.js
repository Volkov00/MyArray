'use strict'


function MyArray() {
  this.length = 0;
}

MyArray.prototype = new MyArrayProto();

function MyArrayProto() {
  this.push = function push(item) {
    this[this.length++] = item;
    return this.length
  }
  this.pop = function pop() {
    if (this.length === 0) return;

    const lvalue = this[this.length - 1];
    delete this[--this.length];
    return lvalue;
  }
  this.shift = function shift() {

    }
  
  }

  


const frag = new MyArray();
frag.push(1)
frag.push(2)
frag.push(3)
frag.push(4)
console.log(frag)
frag.shift()
console.log(frag)
frag.shift()
console.log(frag)


