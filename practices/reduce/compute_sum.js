'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return collection.reduce(reducer);
}

module.exports = calculate_elements_sum;

