function buildResults(results, site) {
  if (results.title) {
    buildCard;
  } else {
    for (let item in results) {
      site.textContent += results[item].title;
      site.innerHTML += "<br><hr>";
    }
  }
}

function buildCard(obj, site) {
  url = obj.link;
  site.innerHTML += `<a href=${url}>${obj.title}</a>`;
  site.innerHTML += "<br>";
  site.textContent += obj.preview;
  site.innerHTML += "<br>";
  site.innerHTML += `<a href=${url}>${url}</a>`;
}

module.exports = { buildResults };
