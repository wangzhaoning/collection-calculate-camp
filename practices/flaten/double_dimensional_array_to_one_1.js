'use strict';

function double_to_one(collection) {

  //在这里写入代码
  /* var result=new Array();
  for(var i=0;i<collection.length;i++)
  {

    for(var j=0;j<collection[i].length;j++)
    {
      result.push(collection[i][j]);
    }
  }
  return result;
*/
  var result=new Array();
  for (var i = 0; i < collection.length; i++){
    result = result.concat(collection[i]);
  }
  return result;
}

module.exports = double_to_one;
