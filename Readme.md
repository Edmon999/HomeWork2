# Primitive Types Js

## Built With
 Javascript


## Comparisons 
#### Examples
```
 5 > 4; //// true
"apple" > "pineapple"; //// "a".charCodeAt() === 97 "p".charCodeAt()===112, false
"2" > "12"; /// string convert  to number, false
undefined == null; /// true
undefined === null; /// false,
null == "\n0\n"; // false
null === +"\n0\n"; // false
```
## Data Type 
#### Examples
let name = "Ilya";

alert(`hello ${1}`); // hello 1

alert(`hello ${"name"}`); // hello name,

alert(`hello ${name}`); // hello ilya

## index 
#### Examples
let name;
let admin;
name = "John";
admin = name;
console.log(admin);
////////////////

let i = 10;
let n = i++ % 5;
/// n === 0, n === 10 % 5 === 0

////////////
let a = 10,
  b = 3;
let c = a;
a = b;
b = c;

////////////
let a = 10,
  b = 3;
[a, b] = [b, a];

## Logical Operators
#### Examples
let age;
if (age >= 14 && age <= 90) {
  return true;
}

if (!(age >= 14 && age <= 90)) {
  return true;
}
if (age < 14 || age > 90) {
  return true;
}
## Numbers
#### Examples
A random number from min to max

var randomNumber4 = (min, max) => {
  return min + Math.random() * (max - min);
}; 
## String
#### Examples
//// Truncate the text
var truncate1 = (str, num) => {
  if (num > str.length) {
    return str;
  }
  let newStr = str.slice(0, num) + "...";
  console.log(newStr);
};
## Getting Started
For running these project you need 

* VS CODE 
* Any Browser

## Contact

Edmon - [edmon.sargsyan999@gmail.com](https://gmail.com) <br />
Project Link - [ACA-firstTask](https://github.com/Edmon999/ACA-firstTask)

