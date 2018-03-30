'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result=new Array();
  var b=true;
  for(var i=0;i<collection_a.length;i++)
  {
    result.push(collection_a[i]);
  }
  for(var i=0;i<collection_b.length;i++)
  {
    b=true;
    for(var j=0;j<collection_a.length;j++)
    {
      if(collection_b[i]===collection_a[j])
      {
        b=false;
      }
    }
    if(b===true)
    {
      result.push(collection_b[i]);
    }
  }
  return result;
}
module.exports = get_union;

