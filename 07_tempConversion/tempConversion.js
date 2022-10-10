const ftoc = function(f) {
  let fConv = ((f - 32) * 5 / 9);
  if (fConv % 1 !== 0) {
    fConv = ((f - 32) * 5 / 9).toFixed(1)
  }
  return parseFloat(fConv);
};

const ctof = function(c) {
  let cConv = ((c / 5 * 9) + 32);
  if (cConv % 1 !== 0) {
    cConv = ((c / 5 * 9) + 32).toFixed(1);
  }
  return parseFloat(cConv);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
