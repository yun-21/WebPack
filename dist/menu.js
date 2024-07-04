"use strict";

var root = document.getElementById('root');
var anchorTags = function anchorTags(href, text) {
  var result = "<a href=".concat(href, ">").concat(text, "</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
root.innerHTML = "\n<ul>\n  ".concat(liTags(anchorTags("#jiyun", '도릉')), "\n</ul>\n");