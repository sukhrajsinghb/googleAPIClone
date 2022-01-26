const form = document.querySelector("form");

form.addEventListener("submit", onClick);
form.addEventListener("feeling-lucky", feelingLucky);

async function onClick(e) {
  e.preventDefault();
  search = document.querySelector("#search").value;
  await fetch(`127.0.0.1:3000/${search}`);
}

function feelingLucky(e) {
  e.preventDefault();
  console.log(e);
}
