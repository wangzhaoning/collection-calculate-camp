'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var total=new Array();
  var result=new Array();
for(var i=0;i<26;i++)
{
  total.push(String.fromCharCode(97+i));
}
for(var i=0;i<26;i++)
{
  total.push('a'+String.fromCharCode((97+i)));
}
for(var i=0;i<26;i++)
{
  total.push('b'+String.fromCharCode((97+i)));
}
if(number_a<number_b)
{
  for(var k=number_a;k<=number_b;k++)
  {
    result.push(total[k-1]);
  }
}
if(number_a>number_b)
{
  for(var k=number_a;k>=number_b;k--)
  {
    result.push(total[k-1]);
  }
}
if(number_a===number_b)
{
  result.push(total[number_b-1]);
}
return result;
}

module.exports = get_letter_interval_2;

