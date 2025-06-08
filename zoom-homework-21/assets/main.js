// === forEach === //

Array.prototype.forEach2 = function (callback, thisArg) {
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this) {
      callback.call(thisArg, this[i], i, this);
    }
  }
};

// ** Ví dụ

// - ví dụ 1:
console.log("Ví dụ 1: forEach");

const numbers = [1, 2, 3, 4, 5];

const test1 = numbers.forEach2((value, index) => {
  console.log(`Value: ${value}, Index: ${index}`);
});

// - ví dụ 2:
console.log("Ví dụ 2: forEach");

const member = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 35 },
];

const test2 = member.forEach2((value, index) => {
  console.log(value);
});

// - ví dụ 3:
console.log("Ví dụ 3: forEach");

const str = ["abc", 12, 33, "xyz"];

const test3 = str.forEach2((value, index) => {
  console.log(`Value: ${value}, Index: ${index}`);
});

console.log("############################");

// === reduece === //

Array.prototype.reduce2 = function (callback, initialValue) {
  let accumulator = initialValue;
  let j = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = j; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

// ** Ví dụ

// - ví dụ 1:
console.log("Ví dụ 1: reduce");

const check1 = numbers.reduce2((total, value) => {
  return total + value;
});

console.log(check1);

// - ví dụ 2:
console.log("Ví dụ 2: reduce");

const person = [
  { name: "Nguyễn", age: 30 },
  { name: "Thanh", age: 25 },
  { name: "Hòa", age: 35 },
];

const check2 = person.reduce2((total, value) => {
  return total + " " + value.name;
}, "");

console.log(check2);

// - ví dụ 3:
console.log("Ví dụ 3: reduce");

const check3 = person.reduce2((total, value) => {
  if (typeof total !== "number") {
    return total.age + value.age;
  } else {
    return total + value.age;
  }
});

console.log(check3);

console.log("############################");

// === map === //

Array.prototype.map2 = function (callback, thisArg) {
  const length = this.length;
  const result = new Array(length);

  // console.log(result)

  for (let i = 0; i < length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return result;
};

// ** Ví dụ

// - ví dụ 1:
console.log("Ví dụ 1: map");

const check4 = numbers.map2((value) => value + "");

console.log(check4);

// - ví dụ 2:
console.log("Ví dụ 2: map");

const furit = ["Apple", "Banana", "Orange"];

const createHtml = (arr) => {
  const check5 = arr.map2((value) => `<li>${value}</li>\n`);

  return `<ul>\n ${check5.join(" ")}</ul>`;
};

console.log(createHtml(furit));

// - ví dụ 3:
console.log("Ví dụ 3: map");

const check6 = person.map2((value) => {
  return value.age;
});

console.log(check6);

console.log("############################");

// === find === //

Array.prototype.find2 = function (callback, thisArg) {
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
};

// ** Ví dụ

// - ví dụ 1:
console.log("Ví dụ 1: find");
const num = [3, 7, 12, 18, 21];
const result = num.find2((num) => num > 10);

console.log(result);

// - ví dụ 2:
console.log("Ví dụ 2: find");

const users = [
  { id: 1, name: "An" },
  { id: 2, name: "Bình" },
  { id: 3, name: "Cường" },
];
const user = users.find2((u) => u.name === "Bình");

console.log(user);

// - ví dụ 3:
console.log("Ví dụ 3: find");

const words = ["apple", "banana", "cherry", "date"];

const word = words.find2((w) => w.startsWith("d"));

console.log(word);

console.log("############################");

// === filter === //

Array.prototype.filter2 = function (callback, thisArg) {
  const length = this.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

// ** Ví dụ

// - ví dụ 1:
console.log("Ví dụ 1: filter");
const number = [3, -1, 5, -9, 0, -2, 8];

const negativeNum = number.filter2((value) => value < 0);

console.log(negativeNum);

// - ví dụ 2:
console.log("Ví dụ 2: filter");
const names = ["Linh", "Trang", "Alexander", "Minh", "Jennifer"];

const newName = names.filter2((value) => {
  const length = value.length;
  if (length >= 5) {
    return value;
  }
});

console.log(newName);

// - ví dụ 3:
console.log("Ví dụ 3: filter");

const products = [
  { name: "Tivi", inStock: true },
  { name: "Máy giặt", inStock: false },
  { name: "Tủ lạnh", inStock: true },
];
const checkInStock = products.filter2((value) => {
  const inStock = value.inStock;

  if (inStock === true) {
    return value;
  }
});

console.log(checkInStock);

console.log("############################");

// === every === //
Array.prototype.every2 = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (!callback.call(thisArg, this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// ** Ví dụ

// - ví dụ 1:

console.log("Ví dụ 1: every");

const nums = [1, 2, 3, 4];

const result1 = nums.every2(function (num) {
  return num > 0;
});

console.log(result1);

// - ví dụ 2:
console.log("Ví dụ 2: every");
const animal = ["cat", "dog", "monkey"];

const result2 = animal.every2(function (word) {
  return word.length >= 3;
});

console.log(result2);

// - ví dụ 3:
console.log("Ví dụ 3: every");
const students = [
  { name: "An", score: 6 },
  { name: "Bình", score: 4 },
  { name: "Chi", score: 7 },
];

const result3 = students.every2(function (student) {
  return student.score >= 5;
});

console.log(result3);

console.log("############################");

// === some === //
Array.prototype.some2 = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        return true;
      }
    }
  }
  return false;
};

// ** Ví dụ

// - ví dụ 1:

console.log("Ví dụ 1: some");

const result4 = numbers.some2(function (num) {
  return num % 2 === 0;
});

console.log(result4);

// - ví dụ 2:
console.log("Ví dụ 2: some");

const result5 = animal.some2(function (word) {
  return word.length > 3;
});

console.log(result5);

// - ví dụ 3:
console.log("Ví dụ 3: some");

const result6 = students.some2(function (student) {
  return student.score > 5;
});

console.log(result6);
