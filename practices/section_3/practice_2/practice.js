function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result=collection_a;
  for(var i=0;i<collection_a.length;i++)
  {
    for(var j=0;j<object_b.value.length;j++)
    {
      if(collection_a[i].key===object_b.value[j])
      {
        var num=collection_a[i].count;
        while(num>=3)
        {
          result[i].count--;
          num-=3;
        }
      }
    }
  }
  return result;
  /*return [
    {key: "a", count: 2},
    {key: "e", count: 5},
    {key: "h", count: 11},
    {key: "t", count: 20},
    {key: "f", count: 6},
    {key: "c", count: 8},
    {key: "g", count: 7},
    {key: "b", count: 6},
    {key: "d", count: 4}
  ];*/
}

module.exports = create_updated_collection;
