(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function buildResults(results, site) {
  console.log(results);
  if (results.title) {
    buildCard(results, site);
  } else {
    for (let item in results) {
      buildCard(results[item], site);
      site.innerHTML += "<br><hr>";
    }
  }
}

function buildCard(obj, site) {
  console.log(obj);
  url = obj.link;
  site.innerHTML += `
  <p>
    <a href=${url}>${obj.title}</a>
    <br>
    ${obj.preview}
    <br>
    <a href=${url}>${url}</a>;
  </p>`;
}

module.exports = { buildResults };

},{}],2:[function(require,module,exports){
const { buildResults } = require("./helpers.js");
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

  fetch(`http://localhost:3000/search/${result}`)
    .then((resp) => resp.json())
    .then((results) => {
      let site = document.querySelector("main");
      buildResults(results, site);
    });
}

},{"./helpers.js":1}]},{},[2]);
