'use strict';
var even_asc_odd_desc = function(collection){
  var result=collection;
  var soulte= new Array();
  result.sort(function (a,b){return a-b} );
  var i=0,j=result.length-1;
  while(j>i)
  {
    for(var k=0;k<result.length;k++)
    {
      if(result[k]%2===0)
      {
        soulte[i]=result[k];
        i++;
      }
      else {
        soulte[j]=result[k];
        j--;
      }
    }
  }
    return soulte;
};
module.exports = even_asc_odd_desc;
