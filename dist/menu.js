"use strict";

var root = document.getElementById('root');
var anchorTags = function anchorTags(href, text) {
  var result = "<a href=\"#".concat(href, "\">").concat(text, "</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
var basicData = {
  jaemin: {
    name: "재민",
    backgroundColor: "red"
  },
  ujin: {
    name: "유진",
    backgroundColor: "yellow"
  },
  jiyun: {
    name: "지윤",
    backgroundColor: "pink"
  },
  ukjae: {
    name: "욱재",
    backgroundColor: "blue"
  }
};
var totalElement = function totalElement(object) {
  var result = '';
  for (var key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    var value = object[key];
    result += liTags(anchorTags(key, value.name));
  }
  return result;
};
root.innerHTML = "\n<ul id=\"menu\">\n  ".concat(totalElement(basicData), "\n</ul>\n<main id=\"main-target\"></main>\n");

// -----------------------------------------------------------------------------//
// 조립 컴포넌트 //

var mainTarget = document.getElementById("main-target");
console.log(window.location.hash);
window.addEventListener('hashchange', function () {
  var hash = window.location.hash;
  console.log(hash.slice(1));
  var test = basicData[hash.slice(1)];
  var div = document.createElement('div');
  div.style.backgroundColor = test.backgroundColor;
  div.textContent = test.name;
  if (mainTarget.hasChildNodes()) {
    mainTarget.removeChild(mainTarget.childNodes[0]);
  }
  mainTarget.appendChild(div);
});