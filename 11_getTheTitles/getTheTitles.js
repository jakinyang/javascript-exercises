const getTheTitles = function(array) {
  let titleArr = new Array;
  array.forEach(item => {
    titleArr.push(item.title);
  })
  return titleArr;
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
