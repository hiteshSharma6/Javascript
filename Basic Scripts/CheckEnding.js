
function confirmEnding(str, target) {
  var targetLength = target.length;
  if(str.substring(str.length - targetLength) === target)
    return true;
  return false;
}

confirmEnding("Bastian", "n");
