'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var temp=0;
  var result=new Array();
  for(var i=0;i<collection.length;i++)
  {
    temp=0;
    if(collection[i]%2!=0)
    {
      temp=collection[i]*3+2;
      result.push(temp);
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

