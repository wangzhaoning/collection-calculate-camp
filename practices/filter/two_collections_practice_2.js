'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result=new Array();
  var b=true;
  for(var i=0;i<collection_a.length;i++)
  {
    b=true;
    for(var j=0;j<collection_b.length;j++)
    {
      if(collection_a[i]===collection_b[j])
      {
        b=false;
      }
    }
    if(b===true)
    {
      result.push(collection_a[i]);
    }
  }
  return result;

}

module.exports = choose_no_common_elements;
