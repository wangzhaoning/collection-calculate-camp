'use strict';
var single_element = function(collection){
  var count=0;
  var result= new Array();
 for (var i=1;i<collection.length;i+=2)
 {
   count=0;
   for (var j=1;j<collection.length;j+=2)
   {
     if(collection[i]===collection[j])
     {
       count++;
     }
   }
   if(count===1)
   {
     result.push(collection[i]);
   }
 }
 return result;
};
module.exports = single_element;
