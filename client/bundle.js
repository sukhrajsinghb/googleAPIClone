(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const form = document.querySelector("form");

form.addEventListener("submit", onClick);

async function onClick(e) {
  // console.log(form[0].value);
  e.preventDefault();
  localStorage.setItem("search", form[0].value);
  location.href = "/search.html";

  // search = document.querySelector("#search").value;
  //   await fetch(`127.0.0.1:3000/search/${search}`).then((resp) => resp.json());
}

if (document.title !== "Google") {
  result = localStorage.getItem("search");
  document.title = result;
  document.querySelector("form")[0].value = result;
}

},{}]},{},[1]);
