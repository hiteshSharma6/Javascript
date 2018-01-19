
function reverseString(str) {
  var arr = str.split("");
  arr.reverse();
  
  return arr.join("");
}

reverseString("Hello");