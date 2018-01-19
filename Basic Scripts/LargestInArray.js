
function largestOfFour(arr) {
  
  return arr.map( (smallArr) => {
    
    return smallArr.reduce( (accum, current) => {  
      
      return (accum > current) ? accum : current;
    }, smallArr[0]);
    
  });
}

//Declarative approach
function largestOfFour2(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
