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
    // через рест передаем параметры из не создался масив который надо перебрать и записать свойсва
    for (let key of args) {
      // перебераем их
      if (this.size >= this._maxSize) {
        throw new RangeError("Stack overlow");
      }
      this[`_${this.size}`] = key; // индексы присваиваем айтмы
      this._size++; // увеличиваем индекс
    }
    return this.size; // возвращаем индекс
  }
  pop() {
    if (this.size <= 0) {
      return;
    }
    const lastItem = this[`_${this.size - 1}`]; //Посл элемент
    delete this[`_${this.size - 1}`]; // удаления посл элемента
    this._size--; //уменшаем индекс
    return lastItem; // возврощаем посл элемент
  }
  pip() {
    return this[`_${this.size - 1}`]; //возвращаем посл элемент
  }
}

const stack = new Stack(15, "val1", "va2", 3, 4, 5);
stack.push(6, 7, 8, 9, 10);
console.log(stack);

//=======ПРОВЕРКА ОДНОЙ СКОБКИ=========================>
// function checkSquence(str) {
//   const stack1 = new Stack();
//   for (let item of str) {
//     if (item === "(") {
//       stack1.push(item);
//     }
//     if (stack1.isEmpty) {
//       return false;
//     }
//     if (item === ")" && stack1.pip() === "(") {
//       stack1.pop();
//     }
//   }
//   return stack1.isEmpty;
// }

//===========ПРОВЕРКА НЕСКОЛЬКИХ СКОБОК===========================>

const options = {
  braces: {
    "(": ")",
    "[": "]",
    "{": "}",
  },
  isSrict: false,
};

function checkSquence(str, options) {
  const braces = options.braces; //ключи значения
  const closeBraces = Object.values(braces); // только значения
  const stack1 = new Stack();
  for (let item of str) {
    //1.опеределить открв скобку. запушить её в стек
    if (braces[item]) {
      stack1.push(item);
      continue;
    }
    //2.опеределить если стек пуст, елси пуст вернет фолс и если символ закрв строкой
    if (closeBraces.includes(item) && stack.isEmpty) {
      return false;
    }
    const lastItem = braces.pip();
    const correctCloseBrace = braces[lastItem];
    if (item === correctCloseBrace) {
      stack.pop();
    } else if (braces[item] || closeBraces.includes[item]) {
      return false;
    }
  }
  return stack1.isEmpty;
}
