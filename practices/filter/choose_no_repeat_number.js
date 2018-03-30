'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result=new Array();
  result.push(collection[0]);
  var b=true;
  for(var i=0;i<collection.length;i++)
  {
    b=true;
     for(var j=0;j<result.length;j++)
     {
       if(collection[i]===result[j])
       {
         b=false;
       }
     }
     if(b===true)
     {
         result.push(collection[i]);
     }
  }
  return result;
}

module.exports = choose_no_repeat_number;
