// Write a function that will check if two given characters are the same case.

// If any of characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters and not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// const countChar = (str) => {
//   const counts = {};
//   for (const s of str) {
//     if (counts[s]) {
//       counts[s]++;
//     } else {
//       counts[s] = 1;
//     }
//   }
//   return counts;
// };

// const str =
//   "I want to count the number of occurences of each char in this string";
// console.log(countChar(str));

class Item {
  name() {
    return 'I am an item';
  }
}

class Calculator {
  calculate() {
    return 'calculate something';
  }
}

class Child {
  calculate() {
    return 'calculate something else';
  }
}

class AgedBrie {
  constructor(item) {
    // dependency injection, composition
    this.item = item;
  }

  sayName() {
    return this.item.name();
  }

  calculateAge(arg) {
    // dependency injection
    return arg.calculate(); // polymorphism
  }
}

// const item = new Item();
// console.log("item.....", item);
// const agedBrie = new AgedBrie(item); // composing AgedBrie from Item (we needed functionality of Item) and so dependency is injected
// console.log("agedBrie....", agedBrie);
// const calculator = new Calculator();
// console.log("claculator...", calculator);
// const child = new Child();
// console.log("child...", child);

// console.log(agedBrie.sayName());
// console.log(agedBrie.calculateAge(calculator)); // dependency is injected
// console.log(agedBrie.calculateAge(child)); // dependency is injected

// console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
// console.log(data[0]);

//You can start simple and just render a single
//pokemon card from the first element
