'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  /*if(Object.prototype.toString.call(collection_a) === "[object Array]" && Object.prototype.toString.call(collection_b) === "[object Array]") {
    return collection_a.filter(function(v){
      return collection_b.indexOf(v)!==-1
    })
  }*/
  var result = new Array();
  for (var i = 0; i < collection_b.length; i++) {
    var temp = collection_b[i];
    for (var j = 0; j < collection_a.length; j++) {
      if (temp === collection_a[j]) {
        result.push(temp);
        break;
      }
    }
  }
  return result;
}
  module.exports = get_intersection;

