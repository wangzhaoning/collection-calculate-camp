function count_same_elements(collection) {
  //在这里写入代码
  var result=new Array();
  result.push(collection[0]);
  var b=true;
  for(var i=0;i<collection.length;i++)
  {
    b=true;
    for(var j=0;j<result.length;j++)
    {
      if(collection[i]===result[j])
      {
        b=false;
        break;
      }
    }
    if(b===true)
    {
      result.push(collection[i]);
    }
  }
  var solute=new Array();
  var obj={};
  var count=0;
  for(var i=0;i<result.length;i++)
  {
    count=0;
    obj={};
    for(var j=0;j<collection.length;j++)
    {
      if(result[i]===collection[j])
      {
        count++;
      }
    }
    obj["key"]=result[i];
    obj["count"]=count;
    solute.push(obj);
  }
  return solute;
}

module.exports = count_same_elements;
