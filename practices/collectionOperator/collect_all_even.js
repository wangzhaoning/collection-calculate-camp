'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var result=new Array();
for(var j=0;j<collection.length;j++)
 {
   if(collection[j]%2===0)
   {
     result.push(collection[j]);
   }
 }
 return result;
}
module.exports = collect_all_even;
