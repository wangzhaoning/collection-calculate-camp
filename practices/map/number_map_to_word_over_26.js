'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(function (value) {
    var temp=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    if(value<27)
    {
      return String.fromCharCode(value+96);
    }
    else{
      var i=Math.floor(value/27);
      var j=value%27;
      return temp[i-1]+temp[j];
    }
  });
};

module.exports = number_map_to_word_over_26;
