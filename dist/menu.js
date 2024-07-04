"use strict";

var root = document.getElementById('root');
var liTags = function liTags() {
  var result = '<li>목록</li>';
  return result;
};
root.innerHTML = "\n<ul>\n  ".concat(liTags(), "\n</ul>\n");