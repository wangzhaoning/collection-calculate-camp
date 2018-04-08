'use strict';
function map_to_even(collection){
  return collection.map(function(items)
  {
    return items*2;
  });
}
module.exports = map_to_even;
