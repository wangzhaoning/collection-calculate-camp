'use strict';

function average_to_letter(collection) {
  function arrAverageNum(arr){
    var sum = eval(arr.join("+"));
    return (~~Math.ceil(sum/arr.length));
  }
  return String.fromCharCode(arrAverageNum(collection)+96);
  //return arrAverageNum(collection);
}

module.exports = average_to_letter;

