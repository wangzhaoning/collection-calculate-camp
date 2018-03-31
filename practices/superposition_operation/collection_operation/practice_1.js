'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var result=0;
  var temp=0;
  for(var i=0;i<collection.length;i++)
  {
    temp=0;
    temp=collection[i]*3+2;
    result=result+temp;
  }
  return result;
}

module.exports = hybrid_operation;

