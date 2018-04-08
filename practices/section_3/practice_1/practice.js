function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result=collection_a;
  for(var i=0;i<collection_a.length;i++)
  {
    for(var j=0;j<object_b.value.length;j++)
    {
     if(collection_a[i].key===object_b.value[j])
     {
       result[i].count--;
     }
    }
  }
  return result;
 /* return [
    {key: "a", count: 1},
    {key: "e", count: 1},
    {key: "h", count: 2},
    {key: "t", count: 2},
    {key: "f", count: 1},
    {key: "c", count: 2},
    {key: "g", count: 2},
    {key: "b", count: 2},
    {key: "d", count: 1}
  ];*/
}

module.exports = create_updated_collection;
