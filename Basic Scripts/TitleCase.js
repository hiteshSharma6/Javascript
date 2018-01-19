//better to use charAt as str[index] is not supported in some

function titleCase(str) {
  var arr = str.split(" ");
  
  for(i=0; i<arr.length; ++i) {
    arr[i] = arr[i].toLowerCase().replace(arr[i].charAt(0), arr[i][0].toUpperCase());
  }
  
  return arr.join(" ");
}

function titleCase2(str) {
  var arr = str.toLowerCase().split(" ");
  
  var result = arr.map(function(val) {
    return val.replace(val[0], val.charAt(0).toUpperCase());
  });
  
  return result.join(" ");
}

function efficientTitleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

titleCase("I'm a little tea pot");
