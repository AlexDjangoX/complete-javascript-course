const solution = string => {
  let newStr = '';
  if (string.length) {
    if (string.length % 2 !== 0) {
      newStr = string + '_';
      return newStr.match(/.{2}/g);
    } else {
      return string.match(/.{2}/g);
    }
  }
  return [];
};

const myString = 'hellototheboss';

console.log(solution(myString));

const anotherScore = () => {
  let finalScore = 0;
  let subScore = 0;
  let multiply = 1;
  // check if the argument is a string
  if (typeof this.word !== 'string') {
    return finalScore;
  } else {
    const wordArr = this.word.toLowerCase().split('');

    for (let i = 0; i < wordArr.length; i++) {
      // check if there is curly bracket or square bracket
      // if so, change the multiply to 2 or 3
      // If so, change the multiply to 2 or 3. If not, multiply remains 1
      if (wordArr[i] === '{') {
        multiply = 2;
      } else if (wordArr[i] === '}') {
        multiply = 1;
      } else if (wordArr[i] === '[') {
        multiply = 3;
      } else if (wordArr[i] === ']') {
        multiply = 1;
      } else {
        if (this.onePoint.includes(wordArr[i])) subScore = 1;
        if (this.twoPoints.includes(wordArr[i])) subScore = 2;
        if (this.threePoints.includes(wordArr[i])) subScore = 3;
        if (this.fourPoints.includes(wordArr[i])) subScore = 4;
        if (this.fivePoints.includes(wordArr[i])) subScore = 5;
        if (this.eightPoints.includes(wordArr[i])) subScore = 8;
        if (this.tenPoints.includes(wordArr[i])) subScore = 10;
        finalScore += subScore * multiply;
      }
    }
  }
  return finalScore;
};

console.log(anotherScore);

const letterValue = {};

const anotherScoreAnother = () => {
  let totalScore = 0;
  let multiple = 1;
  if (this.word === null || this.word === '') {
    return 0;
  }
  if (this.word === '\t' || this.word === '\n') {
    totalScore += 0;
  }
  for (let i = 0; i < this.word.length; i++) {
    const letter = letterValue[this.word[i].toLowerCase()] || 0;
    if (this.word[i] === '[') {
      multiple = 2 * multiple;
    }
    if (this.word[i] === '{') {
      multiple = 3 * multiple;
    }
    if (this.word[i] === ']') {
      multiple = multiple / 2;
    }
    if (this.word[i] === '}') {
      multiple = multiple / 3;
    }
    totalScore += letter * multiple;
  }
  return totalScore;
};

console.log(anotherScoreAnother('[OXYPHENBUTA{Z}ONE]'));

// if empty string return 0
// if has whitspace \t, \n return 0
// if null return 0
//
