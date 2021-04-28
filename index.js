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
