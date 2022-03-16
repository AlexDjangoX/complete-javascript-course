const arr = ['az', 'toto', 'picaro', 'zone', 'kiwi'];
const output = [
  ['az', 'toto picaro zone kiwi'],
  ['az toto', 'picaro zone kiwi'],
  ['az toto picaro', 'zone kiwi'],
  ['az toto picaro zone', 'kiwi'],
];

const partlist = (arr = []) => {
  let array;
  const result = [];

  for (let j = 1; j < arr.length; j++) {
    array = [];

    array.push(arr.slice(0, j).join(' '));
    array.push(arr.slice(j).join(' '));
    result.push(array);
  }
  return result;
};

console.log(partlist(arr));

const partlisted = arr =>
  arr
    .map((word, i) => [
      arr.slice(0, i + 1).join(' '),
      arr.slice(i + 1).join(' '),
    ])
    .slice(0, arr.length - 1);

console.log(partlisted(arr));

const isWalkValid = walk => {
  let ns = 0;
  let we = 0;
  if (walk.length === 10) {
    for (let direction of walk) {
      if (direction === 'n') ns += 1;
      if (direction === 's') ns -= 1;
      if (direction === 'w') we += 1;
      if (direction === 's') we -= 1;
    }
    if (ns === 0 && we === 0) {
      return true;
    }
  } else {
    return false;
  }
  return false;
};

const isWalkValided = walk => {
  let ns = 0;
  let we = 0;
  if (walk.length === 10) {
    for (let direction of walk) {
      if (direction === 'n') ns += 1;
      if (direction === 's') ns -= 1;
      if (direction === 'w') we += 1;
      if (direction === 'e') we -= 1;
    }
  } else return false;
  return ns === 0 && we === 0;
};

function isValidWalk(walk) {
  let ns = 0,
    ew = 0;
  if (walk.length === 10) {
    for (let i of walk) {
      if (i == 'n') ns += 1;
      if (i == 's') ns -= 1;
      if (i == 'e') ew += 1;
      if (i == 'w') ew -= 1;
    }
  } else return false;
  return ns === 0 && ew === 0;
}

function isValidWalk(walk) {
  const north = walk.filter(item => {
    return item === 'n';
  }).length;
  const south = walk.filter(item => {
    return item === 's';
  }).length;
  const east = walk.filter(item => {
    return item === 'e';
  }).length;
  const west = walk.filter(item => {
    return item === 'w';
  }).length;

  return walk.length === 10 && north === south && east === west;
}

const openOrSenior = array => {
  let arr = [];
  for (let element of array) {
    if (element[0] >= 55 && element[1] > 7) {
      arr.push('Senior');
    } else arr.push('Open');
  }
  return arr;
};

const arrTest = [
  [45, 6],
  [89, 12],
  [55, 21],
  [19, -2],
  [104, 20],
];

console.log(openOrSenior(arrTest));

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? 'Senior' : 'Open'
  );
}

function filter_list(list) {
  return list.filter(str => typeof str != 'string');
}

function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
