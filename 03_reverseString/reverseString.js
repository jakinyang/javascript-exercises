const reverseString = function(string) {
  let charArr = [];
  for (let i = string.length - 1; i >= 0; i--) {
    charArr.push(string[i]);
  }
  return charArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
