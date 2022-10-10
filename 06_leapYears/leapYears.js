const leapYears = function(year) {
  console.log(year % 4);
  console.log(year % 400);
  console.log(year % 100);
  if 
    (year % 400 === 0 && year % 4 === 0) {  
      return true;
  } else if 
    (year % 4 === 0 && year % 100 !== 0) {
      return true;
  } else {
      return false;
  }
};

console.log(leapYears(1997));

// Do not edit below this line
module.exports = leapYears;
