'use strict';

//задание1 
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);


//задание2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);

multiplyNumeric(menu);

console.log(menu);

//задание3

let calculator = {
  read() {
    this.a = +prompt('Первое число:', 0);
    this.b = +prompt('Второе число:', 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


//задание4 

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));

//задание5 

let milan = { name: "Милан", age: 19 };
let katua = { name: "Катя", age: 20 };
let masha = { name: "Маша", age: 40 };

let users = [milan, katua, masha];

let names = users.map(user => user.name);

console.log(names);

//задание6 
let milana = { name: "Милана", age: 40 };
let sultan = { name: "Султан", age: 20 };
let sofa = { name: "Софа", age: 30 };


let users1 = [milana, sultan, sofa];

function getAverageAge(users) {
  let totalAge = users1.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users1.length;
}

console.log(getAverageAge(users1));