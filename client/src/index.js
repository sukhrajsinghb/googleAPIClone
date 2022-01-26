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
