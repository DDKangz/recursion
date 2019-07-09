// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var stringify = '';

  if (typeof obj === 'number'|| typeof obj === 'boolean'){
    stringify+= obj;
  }
  if (obj === null){
    return 'null';
  }
  if (typeof obj === 'string'){
    obj = '"' + obj + '"';
    stringify+= obj;
  }
  if (Array.isArray(obj) && obj.length === 0){
    return stringify+= '[]';
  }
  if (Array.isArray(obj) && obj.length > 0){
    var finalArray = []
    obj.forEach(element => {
      finalArray.push(stringifyJSON(element));
    });
    return stringify+= '[' + finalArray.join(',') + ']';
  }
  if (typeof obj === 'object'){
    for (var key in obj){
      if(obj[key] !== undefined && typeof obj[key] !== 'function'){
        stringify+= stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{' + stringify.slice(0,stringify.length-1) + '}';
  }
  return stringify;
};
