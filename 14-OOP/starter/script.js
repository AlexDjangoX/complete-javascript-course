// 'use strict';

// // constructor function
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const alex = new Person('Alex', 1971);
// console.log(alex instanceof Person); // true
// Person.prototype.calculateAge = function () {
//   return 2051 - this.birthYear;
// };
// Person.prototype.species = 'Sapien';
// console.log(alex.species); // Sapien
// console.log(alex.calculateAge());
// console.log(alex.__proto__); // {calculateAge: ƒ, constructor: ƒ} // 3. {} linked to prototype
// console.log(alex.__proto__ === Person.prototype); // true (of Person constructor function)
// console.log(Person.prototype.isPrototypeOf(alex)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false
// // prototypeOfLinkedObjects would be better name for prototype
// console.log(alex.hasOwnProperty('firstName')); // true
// console.log(alex.hasOwnProperty('species')); // false

// console.log(alex.__proto__);
// console.log(alex.__proto__.__proto__);
// console.log(alex.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [7, 8, 8, 7];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

// // coding challenge

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   return console.log(`Your new speed is ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 10;
//   return console.log(`Your new speed is ${this.speed}`);
// };

// const car1 = new Car('BMW', 65);

// console.log(car1);
// car1.accelerate();
// car1.brake();
// car1.brake();

// // ES6 classes

// const PersonClassExpression = class {
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     return console.log(
//       `${this.name}, you are now ${2068 - this.birthYear} years old`
//     );
//   }
// };

// class PersonDeclaration {
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }

//   // added to .prototype property of class
//   calcAge() {
//     return console.log(
//       `${this.name}, you are now ${2068 - this.birthYear} years old`
//     );
//   }
// }

// const alexander = new PersonClassExpression('Alex', 1971);
// const alice = new PersonDeclaration('Alice', 1972);

// alice.calcAge();
// alexander.calcAge();

// console.log(alexander.__proto__ === PersonClassExpression.prototype); // true

// PersonClassExpression.prototype.greet = function () {
//   return console.log(`Good day ${this.name}`);
// };
// // this keyword belongs to object on which it is called
// alexander.greet();

// // Public fields
// // Private fields

// // Public methods
// // Private methods

// class Account {
//   // Public field (on instances not on prototype, also ref by .this)
//   locale = navigator.language;

//   // Private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin, scrabble) {
//     this.scrabble = scrabble;
//     this.owner = owner;
//     this.currency = currency;
//     // protected property - not available outside class
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//     console.log(`${owner}, thank you for opening an account`);
//     this.accountObject;
//     this.lastTransactionPopped;
//     this.balance;
//     this.largestDeposit;
//     this.largestWithdraw;
//     this.tax = [];
//     this.depositsOnlyArray;
//     this.withdrawOnlyArray;
//     this.doubleLetterArray;
//     this.doubleLetterArrayReduced = [];
//     this.splitArray;
//     this.regexArray;
//   }

//   get pin() {
//     return this.#pin;
//   }

//   set pin(newPin) {
//     return (this.#pin = newPin);
//   }
//   // getters & setters - assessor properties - available on all objects

//   accountObject() {
//     this.accountObject = { owner: this.owner, movements: this.#movements };
//     return this.accountObject;
//   }

//   // public interface of objects - API
//   getMovements() {
//     return this.#movements;
//   }

//   balance() {
//     this.balance = this.#movements.reduce((x, y) => x + y, 0);
//     return this.balance;
//   }

//   largestDeposit() {}

//   get popLatestMovement() {
//     this.lastTransactionPopped = this.#movements.pop();
//     return this.lastTransactionPopped;
//   }

//   set pushLatestMovement(amount) {
//     this.#movements.push(amount);
//     return this.#movements;
//   }

//   deposit(amount) {
//     this.#movements.push(amount);
//     return this;
//   }

//   withdraw(amount) {
//     this.deposit(-amount);
//     return this;
//   }

//   largestDepositMade() {
//     this.largestDeposit = this.#movements.reduce((x, y) => (x > y ? x : y));
//     return this.largestDeposit;
//   }

//   largestWithdrawMade() {
//     this.largestWithdraw = this.#movements.reduce((x, y) => (x < y ? x : y));
//     return this.largestWithdraw;
//   }

//   addTax() {
//     this.tax = this.#movements.map(amount => (amount * 1.14).toFixed(2));
//     return this.tax;
//   }

//   depositsOnlyArray() {
//     this.depositsOnlyArray = this.#movements.filter(amount => amount > 0);
//     return this.depositsOnlyArray;
//   }

//   withdrawOnlyArray() {
//     this.withdrawOnlyArray = this.#movements.filter(amount => amount < 0);
//     return this.withdrawOnlyArray;
//   }

//   // private method uses # syntax, not supported yet
//   _approveLoan(val) {
//     return true;
//   }

//   nameIncludesCurlyLeft() {
//     return this.owner.includes('{');
//   }

//   nameIncludesCurlyRight() {
//     return this.owner.includes('}');
//   }

//   luckyCurlyBracket() {
//     if (this.owner[0] === '{' && this.owner[this.owner.length - 1] === '}') {
//       this.deposit(this.largestDepositMade() * 2);
//       return this.#movements;
//     }
//     return `Sorry, curly brackets do not surround your word`;
//   }

//   luckySquareBracket() {
//     // GUARD CLAUSE FOR INCORRECT STRING FORMAT
//     this.regexArray = this.scrabble
//       .match(/(\[[a-z]+)(?=\])/g)
//       .join('')
//       .split(/\[/)
//       .filter(Boolean);

//     for (let element of this.regexArray) {
//       if (element.length > 1 && this.regexArray.length > 1) {
//         return `Your word can only contain brackets that enclose a single letter, or the entre word`;
//       }
//     }

//     if (
//       // MORE THAN ONE DOUBLE SCORING LETTER
//       this.scrabble.split('[').length - 1 >
//       1
//     ) {
//       this.doubleLetterArray = [...this.scrabble];
//       for (let j = 0; j < this.doubleLetterArray.length; j++) {
//         if (this.doubleLetterArray[j] === '[') {
//           this.doubleLetterArrayReduced.push(this.doubleLetterArray[j + 1]);
//         }
//       }
//       return `${this.doubleLetterArrayReduced} : THESE ARE YOUR DOUBLE SCORING LETTERS `;
//     } else if (
//       // ONE LETTER BUT NOT FIRST
//       this.scrabble.includes('[') &&
//       this.scrabble.includes(']') &&
//       this.scrabble[0] !== '['
//     ) {
//       return this.scrabble[this.scrabble.indexOf('[') + 1];
//     } else if (
//       // ONE LETTER BUT NOT LAST
//       this.scrabble.includes('[') &&
//       this.scrabble.includes(']') &&
//       this.scrabble[this.scrabble.length - 1] !== ']'
//     ) {
//       return this.scrabble[this.scrabble.indexOf('[') + 1];
//     } else if (
//       // WHOLE WORD BETWEEN [ ]
//       this.scrabble[0] === '[' &&
//       this.scrabble[this.scrabble.length - 1] === ']'
//     ) {
//       this.deposit(this.largestDepositMade() * 100000);
//       return this.#movements;
//     } else {
//       return `You have no double scoring letters`;
//     }
//   }

//   doubleTripleScore() {
//     if ([...this.owner].includes('{') && [...this.owner].includes('}')) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }
// }

// const acc1 = new Account('[a]lexande[r]', 'EUR', 7654, '[S]crabble[p]i[p]');
// acc1.deposit(1200);
// acc1.withdraw(350);
// acc1.requestLoan(210);
// acc1.getMovements();
// console.log('265....', acc1);
// console.log(Account.locale); // undefined
// console.log(acc1.locale); // en-US
// // console.log(acc1.#movements); // private
// // console.log(acc.#pin); // private
// console.log('270....', acc1.accountObject());
// // Chaining
// console.log(
//   '273....',
//   acc1.deposit(2500).deposit(2500).withdraw(85).requestLoan(6000)
// );
// console.log('276...', acc1.getMovements());
// console.log('277...', acc1.popLatestMovement); // using get written as property
// acc1.pushLatestMovement = 7500;
// console.log('279.....', acc1.getMovements());
// console.log('280', acc1.balance());
// console.log('281', acc1.largestDepositMade());
// console.log('282', acc1.largestWithdrawMade());
// console.log('283', acc1.pin);
// acc1.pin = 1234;
// console.log('285', acc1.pin);
// console.log('286', acc1.addTax());
// console.log('287', acc1.withdrawOnlyArray());
// console.log('288', acc1.depositsOnlyArray());
// console.log('289', acc1.nameIncludesCurlyLeft());
// console.log('290', acc1.nameIncludesCurlyRight());
// console.log('292', acc1.luckyCurlyBracket());
// console.log('293', acc1.luckySquareBracket());
// console.log('294', acc1.doubleTripleScore());

const scoreObject = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

class Scrabble {
  constructor(scrabble) {
    this.scrabble = scrabble;

    this.doubleLetterArray;
    this.tripleLetterArray;
    this.doubleLetterArrayReduced = [];
    this.tripleLetterArrayReduced = [];
    this.regexArray = [];
    this.bracketsToRemove = ['[', ']', '{', '}'];
    this.doubleScoreLettersToRemove;
    this.cleanArrayForScoring;
  }

  wordArray() {
    this.regexArray = [...this.scrabble];
    return this.regexArray;
  }

  lettersOnly() {
    return str.replace(/[^a-zA-Z]/g, '');
  }
  // ()
  doubleScoreCurlyBrackets() {
    // GUARD CLAUSE FOR INCORRECT STRING FORMAT
    if (this.regexArray.includes('{}[]')) {
      this.regexArray = this.scrabble
        .toLowerCase()
        .match(/(\{[a-z]+)(?=\})/g)
        .join('')
        .split(/\{/)
        .filter(Boolean);
      console.log('line 405...', this.regexArray);
      for (let element of this.regexArray) {
        if (element.length > 1 && this.regexArray.length > 1) {
          return `Your word can only contain brackets that enclose a single letter, or the entire word`;
        }
      }
    }

    if (
      // MORE THAN ONE DOUBLE SCORING LETTER
      this.scrabble.split('{').length - 1 >
      1
    ) {
      this.doubleLetterArray = [...this.scrabble];
      for (let j = 0; j < this.doubleLetterArray.length; j++) {
        if (this.doubleLetterArray[j] === '{') {
          this.doubleLetterArrayReduced.push(this.doubleLetterArray[j + 1]);
        }
      }
      return this.doubleLetterArrayReduced;
    } else if (
      // ONE LETTER, BUT NOT FIRST, POSSIBLY LAST, ANYTHING IN BETWEEN
      this.scrabble.includes('{') &&
      // this.scrabble.includes('}') &&
      this.scrabble[0] !== '{'
    ) {
      this.doubleLetterArrayReduced.push(
        this.scrabble[this.scrabble.indexOf('{') + 1]
      );
      return this.doubleLetterArrayReduced;
    } else if (
      // ONE LETTER, BUT NOT LAST, POSSIBLY FIRST, ANYTHING IN BETWEEN
      // this.scrabble.includes('{') &&
      this.scrabble.includes('}') &&
      this.scrabble[this.scrabble.length - 1] !== '}'
    ) {
      this.doubleLetterArrayReduced.push(
        this.scrabble[this.scrabble.indexOf('{') + 1]
      );
      return this.doubleLetterArrayReduced;
    } else if (
      // WHOLE WORD BETWEEN [ ]
      this.scrabble[0] === '{' &&
      this.scrabble[this.scrabble.length - 1] === '}'
    ) {
      this.doubleLetterArrayReduced = [...this.scrabble];
      return this.doubleLetterArrayReduced;
    } else {
      return ``;
    }
  }

  tripleScoreSquareBrackets() {
    // GUARD CLAUSE FOR INCORRECT STRING FORMAT
    if (this.scrabble.includes('{}[]')) {
      this.regexArray = this.scrabble
        .toLowerCase()
        .match(/(\[[a-z]+)(?=\])/g)
        .join('')
        .split(/\[/)
        .filter(Boolean);

      for (let element of this.regexArray) {
        if (element.length > 1 && this.regexArray.length > 1) {
          return `Your word can only contain brackets that enclose a single letter, or the entire word`;
        }
      }
    }

    if (
      // MORE THAN ONE DOUBLE SCORING LETTER
      this.scrabble.split('[').length - 1 >
      1
    ) {
      this.tripleLetterArray = [...this.scrabble];
      for (let j = 0; j < this.tripleLetterArray.length; j++) {
        if (this.tripleLetterArray[j] === '[') {
          this.tripleLetterArrayReduced.push(this.tripleLetterArray[j + 1]);
        }
      }
      return this.tripleLetterArrayReduced;
    } else if (
      // ONE LETTER, BUT NOT FIRST, POSSIBLY LAST, ANYTHING IN BETWEEN
      this.scrabble.includes('[') &&
      this.scrabble.includes(']') &&
      this.scrabble[0] !== '['
    ) {
      this.tripleLetterArrayReduced.push(
        this.scrabble[this.scrabble.indexOf('[') + 1]
      );
      return this.tripleLetterArrayReduced;
    } else if (
      // ONE LETTER, BUT NOT LAST, POSSIBLY FIRST, ANYTHING IN BETWEEN
      this.scrabble.includes('[') &&
      this.scrabble.includes(']') &&
      this.scrabble[this.scrabble.length - 1] !== ']'
    ) {
      this.tripleLetterArrayReduced.push(
        this.scrabble[this.scrabble.indexOf('[') + 1]
      );
      return this.tripleLetterArrayReduced;
    } else if (
      // WHOLE WORD BETWEEN [ ]
      this.scrabble[0] === '[' &&
      this.scrabble[this.scrabble.length - 1] === ']'
    ) {
      this.tripleLetterArrayReduced = [...this.scrabble];
      return this.tripleLetterArrayReduced;
    } else {
      return ``;
    }
  }

  // REMOVE DOUBLE SCORE LETTERS FROM ARRAY
  removeScoredLetters() {
    const doubleScoreLettersToRemove = this.doubleScoreCurlyBrackets();
    console.log(doubleScoreLettersToRemove);

    const arrayMinusScoredLetters = [...this.scrabble].filter(item => {
      return doubleScoreLettersToRemove.indexOf(item) === -1;
    });
    return arrayMinusScoredLetters;
  }

  // REMOVE BRACKETS FROM ARRAY
  cleanArrayOfBrackets() {
    const cleanArrayForScoring = this.arrayMinusScoredLetters.filter(item => {
      return this.bracketsToRemove.indexOf(item) === -1;
    });
  }
}

const doubleScoreWord = new Scrabble('OXYPHENBUTAZONE');
const wordArray = doubleScoreWord.wordArray();
console.log('wordArray', wordArray);
const scoredLettersDouble = doubleScoreWord.doubleScoreCurlyBrackets();
const scoredLettersTriple = doubleScoreWord.tripleScoreSquareBrackets();
console.log('scoredLettersDouble', scoredLettersDouble);
console.log('scoredLettersTriple', scoredLettersTriple);

// remove brackets from array

const bracketsToRemove = ['[', ']', '{', '}'];
const arrayCleanOfBrackets = wordArray.filter(item => {
  return bracketsToRemove.indexOf(item) === -1;
});
console.log('arrayCleanOfBrackets.', arrayCleanOfBrackets);

// remove double score letters from original array

const arrayCleanOfDouble = arrayCleanOfBrackets.filter(item => {
  return scoredLettersDouble.indexOf(item) === -1;
});
console.log('arrayCleanOfDouble....', arrayCleanOfDouble);

// remove triple score letters

const arrayCleanDoubleTriple = arrayCleanOfDouble.filter(item => {
  return scoredLettersTriple.indexOf(item) === -1;
});
console.log('arrayCleanDoubleTriple', arrayCleanDoubleTriple);

// single score

const singleScore = arrayCleanDoubleTriple
  .map(letter => scoreObject[letter.toUpperCase()])
  .reduce((x, y) => x + y, 0);
console.log(singleScore);

// double score

const doubleScore = scoredLettersDouble
  .map(letter => scoreObject[letter.toUpperCase()])
  .reduce((x, y) => x + y, 0);

console.log(doubleScore);

// triple score

const tripleScore = scoredLettersTriple
  .map(letter => scoreObject[letter.toUpperCase()])
  .reduce((x, y) => x + y, 0);

console.log(tripleScore);

// const tripleScore = array => {
//   array.reduce((acc, letter) => (acc += scoreObject[letter]), 0);
// };

// console.log(scoredLettersTriple.tripleScore());

// console.log(scoreTotalRefactored('OXYPHENBUTAZONE'));

// const scoreTotalRefactoredAgain = word =>
//   [...word.toUpperCase()].reduce(
//     (acc, letter) => (acc += scoreObject[letter]),
//     0
//   );
// const doubleScoreWord = new Scrabble('{A}lex{a}n[d]e{r}{p}{r}{k}poiyt{z}');
// const tripleScoreWord = new Scrabble('[x]pp[x]poooiuuy[x]');
// console.log(tripleScoreWord);
// const wordArray = tripleScoreWord.wordArray();
// console.log('entire array', wordArray);
// console.log('trip score letters', tripleScoreWord.tripleScoreSquareBrackets());
// console.log('array minus trip', tripleScoreWord.removeScoredLetters());

// console.log(tripleScoreWord.removeScoredLetters());

// const scoredLetters = tripleScoreWord.tripleScoreSquareBrackets();
// console.log('triple score word array....', wordArray);
// console.log('triple score letters....', scoredLetters);

// const arrayClean = wordArray.filter(item => {
//   return scoredLetters.indexOf(item) === -1;
// });
// console.log('triple score with scored letters removed', arrayClean);

// const bracketsToRemove = ['[', ']', '{', '}'];

// const arrayCleanOfBrackets = arrayClean.filter(item => {
//   return bracketsToRemove.indexOf(item) === -1;
// });

// console.log('array clean of scored letters and brackets', arrayCleanOfBrackets);
// remove non-letters from a string
// function lettersOnly(str) {
//   return str.replace(/[^a-zA-Z]/g, '');
//   //or return str.match(/[a-z]/gi).join('');
//   //or return str.replace(/[^a-z]/gi,"");
// }

// console.log(lettersOnly('R!=:~0o0./c&}9k`60=y')); //"Rocky"
// console.log(lettersOnly('^,]%4B|@56a![0{2m>b1&4i4')); //"Bambi"
// console.log(lettersOnly('^U)6$22>8p).')); //"Up"
