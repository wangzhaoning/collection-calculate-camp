'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result={};
  for(var i=0;i<collection.length;i++)
  {
    result[collection[i]]=0;
  }
  for(var i=0;i<collection.length;i++)
  {
    result[collection[i]]++;
  }
  return result;
 /* var result=new Array();
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
  var soulte=new Array();
  var count=0;

    for(var j=0;j<result.length;j++)
    {
      count=0;
      for(var i=0;i<collection.length;i++)
      {
        if(result[j]===collection[i])
        {
          count++;
        }
      }
      var inf={String.fromCharCode(48+result[i]):count}
   soulte.push(String.fromCharCode(): count );
  }*/
}

module.exports = grouping_count;
