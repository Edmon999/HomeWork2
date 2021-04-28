alert(null || 2 || undefined); //// 2 first true
alert(1 && null && 2); //// null first false
alert(alert(1) && alert(2)); //// undefined
alert(null || (2 && 3) || 4); ////  === alert(null || 3 || 4) // 3

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
////////
let answer = prompt("who is there");
if (answer !== "Admin") {
  return;
} else {
  let password = prompt("Password");
  if (password === "The Master") {
    return true;
  } else {
    return false;
  }
}
