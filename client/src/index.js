const form = document.querySelector("form");

form.addEventListener("submit", onClick);

async function onClick(e) {
  console.log(e);
  e.preventDefault();
  location.href = "/search.html";
  // search = document.querySelector("#search").value;
  //   await fetch(`127.0.0.1:3000/search/${search}`).then((resp) => resp.json());
}
