'use strict';
var even_group_calculate_average = function(collection){
   var result=new Array();
   var temp1=0,temp2=0,temp3=0;
   var c1=0,c2=0,c3=0;
   for(var i=1;i<collection.length;i+=2)
   {
     if(collection[i]<10&&collection[i]%2===0)
     {
       temp1+=collection[i];
       c1++;
     }
     if(collection[i]>=10&&collection[i]<100&&collection[i]%2===0)
     {
       temp2+=collection[i];
       c2++;
     }
     if(collection[i]>=100&&collection[i]<1000&&collection[i]%2===0)
     {
       temp3+=collection[i];
       c3++;
     }
   }
   if(temp1!=0)
   {
     result.push(temp1/c1);
   }
  if(temp2!=0)
  {
    result.push(temp2/c2);
  }
  if(temp3!=0)
  {
    result.push(temp3/c3);
  }
  if(temp1===0&&temp2===0&&temp3===0)
  {
    result.push(0);
  }
   return result;
};
module.exports = even_group_calculate_average;
