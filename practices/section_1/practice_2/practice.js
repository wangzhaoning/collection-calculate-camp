function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection=new Array();
  for (var i = 0; i < collection_b.length; i++){
    collection = collection.concat(collection_b[i]);
  }
  var result=new Array();
  for(var i=0;i<collection_a.length;i++)
  {
    for(var j=0;j<collection.length;j++)
    {
      if(collection_a[i]===collection[j])
      {
        result.push(collection_a[i]);
        break;
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
