// function
function push(array, item) {
  array[array.length] = item;
  return array.length;
};

function forEach(array, callback) {
  for (i = 0; i < array.length; i++) {
      callback(array[i], i);
  }
};

function map(array, callback) {
  newArray = array
  for (i = 0; i < array.length; i++) {
    callback(array[i],i);
  }


};
function filter(words, callback) {
  newArray = words
  for (i = 0; i < words.length; i++) {
    callback(words[i],i);
  }
};
// function reduce(array, callback [, initialValue]) {
//   array[array.length] = item;
//   return array.length;
// };

// function findIndex(array, callback) {
//   array[array.length] = item;
//   return array.length;
// };

// function every(array, callback) {
//   array[array.length] = item;
//   return array.length;
// };

module.exports = {
    push, 
    forEach,
    map,
    filter
};