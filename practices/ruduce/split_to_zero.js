'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result=new Array();
  result.push(number);
  var temp=number;
  while(temp>0)
  {
    temp=temp-interval;
    result.push(temp);
  }
  return result;
}

module.exports = spilt_to_zero;
