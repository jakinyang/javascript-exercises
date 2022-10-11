const fibonacci = function(num) {
  if (num < 0) {
    return 'OOPS';
  }
  let initialValue = 0;
  let fibArray = [1]
    for (let i = 0; i < num; i++) {
      if (fibArray[i]) {
        i++
      }
        fibArray[i] = initialValue + fibArray[i-1];
        initialValue = fibArray[i-1];
    }
  return fibArray[num-1];
};


// Do not edit below this line
module.exports = fibonacci;
