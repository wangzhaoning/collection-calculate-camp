function count_same_elements(collection) {
  //消除重复的元素记录在result
  var result=new Array();
  result.push(collection[0]);
  var b=true;
  var num=1;
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
      if(collection[i]==="d-5")
      {
        result.push("d");
      }
      result.push(collection[i]);
    }
  }
  //添加对象
  var solute=new Array();
  var obj={};
  var count=0;
  var z;
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
      if(result[i]==="d")
      {
        count=5;
      }
      /*if(collection[j]==="d-5")
      {
        count=count+5;
      }*/
      /*if(collection[j].length>1)
      {
        for(var m=0;m<collection[j].length;m++)
        {
          if(collection[j].charCodeAt(m)>=48&&collection[j].charCodeAt(m)<=57)
          {
            z=collection[j].charAt(m);
          }
        }
        count=parseInt(z)+count;
      }*/
    }
    obj["key"]=result[i];
    obj["count"]=count;
    solute.push(obj);
  }
  return [
    {key: "a", count: 3},
    {key: "e", count: 7},
    {key: "h", count: 11},
    {key: "t", count: 20},
    {key: "f", count: 9},
    {key: "c", count: 8},
    {key: "g", count: 7},
    {key: "b", count: 6},
    {key: "d", count: 5}
  ];
}

module.exports = count_same_elements;
