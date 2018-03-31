'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var temp=1;
  temp=Math.ceil((collection[collection.length-1]+collection[0])/2);
  var i=-1;
  var result;
  while(temp>26)
  {
    temp-=26;
    i++;
  }
  result=arr[i]+arr[temp-1];
  return result;

}

module.exports = median_to_letter;
