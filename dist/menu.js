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
  var result = liTags(anchorTags("#".concat(object.jaemin), object.jaemin));
  return result;
};
root.innerHTML = "\n<ul>\n  ".concat(totalElement(basicData), "\n</ul>\n");