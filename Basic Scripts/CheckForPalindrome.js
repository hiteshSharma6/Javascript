
function palindrome(str) {
  var exp1 = /[\W_]/g;
  var newStr = str.replace(exp1, "").toLowerCase();
  var oppStr = newStr.split("").reverse().join("");
  if(newStr == oppStr)
    return true;
  return false;

}

function efficientPalindrome(str) {
  var exp = /[\W_]/;
  var start = 0;
  var end = str.length - 1;
  
  while(start < end) {
    
    while(str[start].match(exp)) {
      start++;
    }
    
    while(str[end].match(exp)) {
      end--;
    }
    
    if(str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
    
  }
  return true;
}

palindrome("eye");
