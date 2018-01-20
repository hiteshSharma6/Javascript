
function confirmEnding(str, target) {
  var targetLength = target.length;
  if(str.substring(str.length - targetLength) === target)
    return true;
  return false;
}

function betterConfirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n");
