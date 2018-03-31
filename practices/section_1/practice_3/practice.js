function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result=new Array();
  for(var i=0;i<collection_a.length;i++)
  {
    for(var j in object_b)
    {
      for(var k=0;k<object_b[j].length;k++)
      {
        if(collection_a[i]===object_b[j][k])
        {
          result.push(collection_a[i]);
          break;
        }
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
