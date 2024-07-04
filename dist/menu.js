"use strict";

var root = document.getElementById('root');
var anchorTags = function anchorTags() {
  var result = '<a href="#">메뉴</a>';
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
root.innerHTML = "\n<ul>\n  ".concat(liTags(anchorTags()), "\n</ul>\n");