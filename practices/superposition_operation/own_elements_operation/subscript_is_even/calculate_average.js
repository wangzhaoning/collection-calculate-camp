'use strict';
var calculate_average = function(collection){
  var result;
  var temp=0;
  var count=0;
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2===0)
    {
      temp+=collection[i];
      count++;
    }
    result=temp/count;
  }
      return result;
};
module.exports = calculate_average;
