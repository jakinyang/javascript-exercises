const palindromes = function (word) {
  // For consistency across letter cases
  word = word.toLowerCase();
  let regex = /\W+/g;
  word = word.replace(regex, '');
  console.log(word);

  let j = word.length -1;  
  for (let i = 0; i < word.length; i++) {
    if(word[j] !== word[i]) {
        return false;
      }
    if (j >= 0) {
      j--;
    }
  }
  return true;
};
// Do not edit below this line
module.exports = palindromes;
