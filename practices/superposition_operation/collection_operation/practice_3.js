'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var temp=0;
  var result=0;
  for(var i=0;i<collection.length;i++)
  {
    temp=0;
    if(collection[i]%2!=0)
    {
      temp=collection[i]*3+5;
      result+=temp;
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

