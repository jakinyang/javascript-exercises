const removeFromArray = function(array, ...target) {
  for (let k = 0; k < target.length; k++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target[k]) {
        array.splice(i, 1);
        i--;
      }
    }
  } 
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
