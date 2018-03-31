function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result=new Array();
  for(var i=0;i<collection_a.length;i++)
  {
    for(var j in collection_a[i])
    {
      for(var n in object_b)
      {
      for(var k=0;k<object_b[n].length;k++) {
        if (collection_a[i][j] === object_b[n][k]) {
          result.push(collection_a[i][j]);
          break;
        }
      }
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
