"use strict";

var root = document.getElementById('root');
var anchorTags = function anchorTags(href, textNode) {
  var result = "<a href=\"#".concat(href, "\">").concat(textNode, "</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
var basicData = {
  jeamin: {
    name: '재민',
    backgroundColor: 'red'
  },
  hoyoung: {
    name: "호영",
    backgroundColor: "green"
  },
  ujin: {
    name: "유진",
    backgroundColor: "yellow"
  },
  jiyoon: {
    name: "지윤",
    backgroundColor: "purple"
  },
  ukjae: {
    name: "욱재",
    backgroundColor: "blue"
  }
};
var totalElement = function totalElement(object) {
  var result = '';
  for (var key in object) {
    var value = object[key];
    result += liTags(anchorTags(key, value.name));
  }
  return result;
};
root.innerHTML = "\n<ul id=\"menu\">\n  ".concat(totalElement(basicData), "\n</ul>\n<main id=\"main-target\"></main>\n");

// ------------------------------------------------------------------
// * HTML을 대신해서 만든 HTML 작성 코드
// * React, CSR

var mainTarget = document.getElementById('main-target');
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