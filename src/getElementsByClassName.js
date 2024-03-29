// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var elementsContainingClass = [];

  var findElementsContainingClass = function(element) {
    if (element.classList && element.classList.contains(className)) {
      elementsContainingClass.push(element);
    }
    if (element.childNodes) {
      _.each(element.childNodes, function(item) {
        findElementsContainingClass(item);
      });
    }
  }
  findElementsContainingClass(document.body);
  return elementsContainingClass;
};
