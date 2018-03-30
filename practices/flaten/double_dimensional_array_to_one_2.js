'use strict';

function double_to_one(collection) {
 var result=new Array();
 var soulte=[];
 var hash={};
 var b=true;
  for (var i = 0; i < collection.length; i++){
    result = result.concat(collection[i]);
  }
for(var j=0;j<result.length;j++)
{
  b=true;
  for(var k=0;k<soulte.length;k++)
  {
    if(result[j]===soulte[k])
    {
      b=false;
    }
  }
  if(b===true)soulte.push(result[j]);
}
  /*
  if(!hash[j])
  {
    soulte.push(result[j]);
    hash[j]=true;
  }
}*/
     return soulte;
}

module.exports = double_to_one;
