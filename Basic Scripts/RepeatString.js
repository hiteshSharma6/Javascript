
function repeatStringNumTimes(str, num) {
  if(num < 1)
    return "";
  return str.concat(repeatStringNumTimes(str, num-1));
}

function repeatStringNumTimes2(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);
