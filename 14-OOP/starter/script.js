'use strict';

// constructor function
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const alex = new Person('Alex', 1971);
console.log(alex instanceof Person); // true
Person.prototype.calculateAge = function () {
  return 2051 - this.birthYear;
};
Person.prototype.species = 'Sapien';
console.log(alex.species); // Sapien
console.log(alex.calculateAge());
console.log(alex.__proto__); // {calculateAge: ƒ, constructor: ƒ} // 3. {} linked to prototype
console.log(alex.__proto__ === Person.prototype); // true (of Person constructor function)
console.log(Person.prototype.isPrototypeOf(alex)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false
// prototypeOfLinkedObjects would be better name for prototype
console.log(alex.hasOwnProperty('firstName')); // true
console.log(alex.hasOwnProperty('species')); // false

console.log(alex.__proto__);
console.log(alex.__proto__.__proto__);
console.log(alex.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [7, 8, 8, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

// coding challenge

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  return console.log(`Your new speed is ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  return console.log(`Your new speed is ${this.speed}`);
};

const car1 = new Car('BMW', 65);

console.log(car1);
car1.accelerate();
car1.brake();
car1.brake();

// ES6 classes

const PersonClassExpression = class {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  calcAge() {
    return console.log(
      `${this.name}, you are now ${2068 - this.birthYear} years old`
    );
  }
};

class PersonDeclaration {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  // added to .prototype property of class
  calcAge() {
    return console.log(
      `${this.name}, you are now ${2068 - this.birthYear} years old`
    );
  }
}

const alexander = new PersonClassExpression('Alex', 1971);
const alice = new PersonDeclaration('Alice', 1972);

alice.calcAge();
alexander.calcAge();

console.log(alexander.__proto__ === PersonClassExpression.prototype); // true

PersonClassExpression.prototype.greet = function () {
  return console.log(`Good day ${this.name}`);
};
// this keyword belongs to object on which it is called
alexander.greet();

// Public fields
// Private fields

// Public methods
// Private methods

class Account {
  // Public field (on instances not on prototype, also ref by .this)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property - not available outside class
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`${owner}, thank you for opening an account`);
    this.accountObject;
    this.lastTransactionPopped;
    this.balance;
    this.largestDeposit;
    this.largestWithdraw;
    this.tax = [];
    this.depositsOnlyArray;
    this.withdrawOnlyArray;
    this.doubleLetterArray;
    this.doubleLetterArrayReduced = [];
    this.splitArray;
    this.regexArray;
  }

  get pin() {
    return this.#pin;
  }

  set pin(newPin) {
    return (this.#pin = newPin);
  }
  // getters & setters - assessor properties - available on all objects

  accountObject() {
    this.accountObject = { owner: this.owner, movements: this.#movements };
    return this.accountObject;
  }

  // public interface of objects - API
  getMovements() {
    return this.#movements;
  }

  balance() {
    this.balance = this.#movements.reduce((x, y) => x + y, 0);
    return this.balance;
  }

  largestDeposit() {}

  get popLatestMovement() {
    this.lastTransactionPopped = this.#movements.pop();
    return this.lastTransactionPopped;
  }

  set pushLatestMovement(amount) {
    this.#movements.push(amount);
    return this.#movements;
  }

  deposit(amount) {
    this.#movements.push(amount);
    return this;
  }

  withdraw(amount) {
    this.deposit(-amount);
    return this;
  }

  largestDepositMade() {
    this.largestDeposit = this.#movements.reduce((x, y) => (x > y ? x : y));
    return this.largestDeposit;
  }

  largestWithdrawMade() {
    this.largestWithdraw = this.#movements.reduce((x, y) => (x < y ? x : y));
    return this.largestWithdraw;
  }

  addTax() {
    this.tax = this.#movements.map(amount => (amount * 1.14).toFixed(2));
    return this.tax;
  }

  depositsOnlyArray() {
    this.depositsOnlyArray = this.#movements.filter(amount => amount > 0);
    return this.depositsOnlyArray;
  }

  withdrawOnlyArray() {
    this.withdrawOnlyArray = this.#movements.filter(amount => amount < 0);
    return this.withdrawOnlyArray;
  }

  // private method uses # syntax, not supported yet
  _approveLoan(val) {
    return true;
  }

  nameIncludesCurlyLeft() {
    return this.owner.includes('{');
  }

  nameIncludesCurlyRight() {
    return this.owner.includes('}');
  }

  luckyCurlyBracket() {
    if (this.owner[0] === '{' && this.owner[this.owner.length - 1] === '}') {
      this.deposit(this.largestDepositMade() * 2);
      return this.#movements;
    }
    return `Sorry, curly brackets do not surround your word`;
  }

  luckySquareBracket() {
    // GUARD CLAUSE FOR INCORRECT STRING FORMAT
    this.regexArray = this.owner
      .match(/(\[[a-z]+)(?=\])/g)
      .join('')
      .split(/\[/)
      .filter(Boolean);

    for (let element of this.regexArray) {
      if (element.length > 1 && this.regexArray.length > 1) {
        return `Your word can only contain brackets that enclose a single letter, or the entre word`;
      }
    }

    if (
      // MORE THAN ONE DOUBLE SCORING LETTER
      this.owner.split('[').length - 1 >
      1
    ) {
      this.doubleLetterArray = [...this.owner];
      for (let j = 0; j < this.doubleLetterArray.length; j++) {
        if (this.doubleLetterArray[j] === '[') {
          this.doubleLetterArrayReduced.push(this.doubleLetterArray[j + 1]);
        }
      }
      return `${this.doubleLetterArrayReduced} : THESE ARE YOUR DOUBLE SCORING LETTERS `;
    } else if (
      // ONE LETTER BUT NOT FIRST
      this.owner.includes('[') &&
      this.owner.includes(']') &&
      this.owner[0] !== '['
    ) {
      return this.owner[this.owner.indexOf('[') + 1];
    } else if (
      // ONE LETTER BUT NOT LAST
      this.owner.includes('[') &&
      this.owner.includes(']') &&
      this.owner[this.owner.length - 1] !== ']'
    ) {
      return this.owner[this.owner.indexOf('[') + 1];
    } else if (
      // WHOLE WORD BETWEEN [ ]
      this.owner[0] === '[' &&
      this.owner[this.owner.length - 1] === ']'
    ) {
      this.deposit(this.largestDepositMade() * 100000);
      return this.#movements;
    } else {
      return `You have no double scoring letters`;
    }
  }

  doubleTripleScore() {
    if ([...this.owner].includes('{') && [...this.owner].includes('}')) {
      return true;
    } else {
      return false;
    }
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
}

const acc1 = new Account('[alexander]', 'EUR', 7654);
acc1.deposit(1200);
acc1.withdraw(350);
acc1.requestLoan(210);
acc1.getMovements();
console.log('265....', acc1);
console.log(Account.locale); // undefined
console.log(acc1.locale); // en-US
// console.log(acc1.#movements); // private
// console.log(acc.#pin); // private
console.log('270....', acc1.accountObject());
// Chaining
console.log(
  '273....',
  acc1.deposit(2500).deposit(2500).withdraw(85).requestLoan(6000)
);
console.log('276...', acc1.getMovements());
console.log('277...', acc1.popLatestMovement); // using get written as property
acc1.pushLatestMovement = 7500;
console.log('279.....', acc1.getMovements());
console.log('280', acc1.balance());
console.log('281', acc1.largestDepositMade());
console.log('282', acc1.largestWithdrawMade());
console.log('283', acc1.pin);
acc1.pin = 1234;
console.log('285', acc1.pin);
console.log('286', acc1.addTax());
console.log('287', acc1.withdrawOnlyArray());
console.log('288', acc1.depositsOnlyArray());
console.log('289', acc1.nameIncludesCurlyLeft());
console.log('290', acc1.nameIncludesCurlyRight());
console.log('292', acc1.luckyCurlyBracket());
console.log('293', acc1.luckySquareBracket());
console.log('294', acc1.doubleTripleScore());
