//первый пришел, первый ушёл
class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    this.push(...args);
  }
  get size() {
    return this._tail - this._head;
  }
  push(...args) {
    for (let item = 0; item < args.length; item++) {
      this[this._tail] = args[item];
      this._tail++;
    }
    return this.size;
  }
  pop() {
    if (this.size) {
      const lastItem = this[this._head];
      delete this[this._head++];
      return lastItem;
    }
  }
}
const q = new Queue(1, 3, 5, 7, 9, 11, 13, 15);
const qq = new Queue(2, 4, 6, 8);
console.log(q);
console.log(qq);
//соеденить две очереди в одну.
function test(q1, q2) {
  const qqq = new Queue();
  while (q1.size || q2.size) {
    if (q1.size !== 0) {
      qqq.push(q1.pop());
    }
    if (q2.size !== 0) {
      qqq.push(q2.pop());
    }
  }
  return qqq;
}
console.log(test(q, qq));
