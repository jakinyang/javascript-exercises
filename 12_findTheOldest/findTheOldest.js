const findTheOldest = function(array) {
  array.forEach(person => {
    if(!person.yearOfDeath) {
      let date = new Date();
      person.yearOfDeath = date.getFullYear();
    }
    person.age = person.yearOfDeath - person.yearOfBirth;
  })
  array.sort((a, b) => b.age - a.age);
  return array[0];
}

// Do not edit below this line
module.exports = findTheOldest;
