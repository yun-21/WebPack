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
var basicData = {
  jaemin: "재민",
  ujin: "유진",
  jiyun: "지윤",
  hoyoung: "호영"
};
var totalElement = function totalElement(object) {
  var result = '';
  for (var key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    var value = object[key];
    result += liTags(anchorTags(key, value));
  }
  return result;
};
root.innerHTML = "\n<ul>\n  ".concat(totalElement(basicData), "\n</ul>\n");