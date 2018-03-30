'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  /*function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j+1]) { //相邻元素两两对比
          var temp = arr[j+1]; //元素交换
          arr[j+1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  /*var collectiona=bubbleSort(collection);
  var temp=1;
  if(collectiona.length%2===0)
  {
    temp=(collectiona[collection.length/2]+collectiona.length/2-1);
  }
  else {
    temp=collectiona[collection.length/2];
  }
  return temp;
}*/

    var ary = collection.split('->').sort(function (a,b) {
      return a - b;
    });
    var lowMiddle = Math.floor((ary.length - 1) / 2);
    var highMiddle = Math.ceil((ary.length - 1) / 2);
    return (Number(ary[lowMiddle]) + Number(ary[highMiddle])) / 2;
  }
module.exports = compute_chain_median;
