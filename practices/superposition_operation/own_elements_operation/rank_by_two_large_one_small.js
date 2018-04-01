'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var result=new Array();
  var coll=collection;
  var temp=0;
  coll.sort(function (a,b) {return a-b});
  for(var i=0;i<coll.length-2;i+=3)
  {
    temp=0;
    temp=coll[i];
    coll[i]=coll[i+1];
    coll[i+1]=coll[i+2];
    coll[i+2]=temp;
  }
  return coll;
}
module.exports = rank_by_two_large_one_small;
