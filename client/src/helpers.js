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
