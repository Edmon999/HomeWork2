///Uppercase the first character
const upper = (str) => {
  let letter = str[0].toUpperCase();
  return letter + str.slice(1);
};

//// Check for spam
const checkSpam1 = (str) => {
  let newStr = str.toLowerCase();
  if (newStr.includes("viagra") || newStr.includes("xxx")) {
    return true;
  } else {
    return false;
  }
};
//// Truncate the text
var truncate1 = (str, num) => {
  if (num > str.length) {
    return str;
  }
  let newStr = str.slice(0, num) + "...";
  console.log(newStr);
};

///// Extract the money
const extractMoney = (dollar) => {
  return +dollar.slice(1);
};
