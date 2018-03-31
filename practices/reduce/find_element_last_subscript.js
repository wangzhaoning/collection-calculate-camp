'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var temp;
  for(var i=collection.length-1;i>=0;i--)
  {
    if(collection[i]===element)
    {
      temp=i;
      break;
    }
  }
  return temp;
}

module.exports = calculate_elements_sum;
