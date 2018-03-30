'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=new Array();
  var i;
  if(number_b===number_a)
  {
    i=number_b;
    if(i%2===0)
    {
      result.push(i);
    }
    return result;
  }
  else if(number_a<number_b) {
    if (number_a % 2 === 0) {
      for (i = number_a; i <= number_b; i = i + 2) {
        result.push(i);
      }
    }
    else {
      for (i = number_a + 1; i <= number_b; i = i + 2) {
        result.push(i);
      }
    }
    return result;
  }
  else if(number_a>number_b)
  {
    if(number_a%2===0)
    {
      for(i=number_a;i>=number_b;i=i-2)
      {
        result.push(i);
      }
    }
    else{
      for(i=number_a-1;i>=number_b;i=i-2)
      {
        result.push(i);
      }
    }
    return result;
  }

}

module.exports = get_integer_interval_2;
