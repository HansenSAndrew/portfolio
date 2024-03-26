var _process$versions, _import$meta$resolve, _import$meta$resolve2, _import$meta;
const data = await (typeof process === "object" && 
(_process$versions = process.versions) !== null &&
 _process$versions !== void 0 && _process$versions.node ? Promise.all([import("fs"),
  import("module")]).then(([fs, module]) => new
   Promise((a => (r, j) => fs.readFile(a, (e, d) => e
    ? j(e) : r(d)))(module.createRequire(import.meta.url)
    .resolve('./portfolio.json')))).then(JSON.parse) : fetch((_import$meta$resolve = (_import$meta$resolve2 = (_import$meta = import.meta).resolve) === null 
    || _import$meta$resolve2 === void 0 ? void 0 : _import$meta$resolve2.call(_import$meta, './portfolio.json')) !== null &&
     _import$meta$resolve !== void 0 ? _import$meta$resolve : new URL('./portfolio.json', import.meta.url)).then(r => r.json()));

const body = document.body;

// Creates Div for the 'cards'
const div = document.createElement('div');
div.className = "Projects";
body.appendChild(div);

// Loops through portfolio.json and creates 'Cards.'
for (var i in data.projects) {
  var name = data.projects[i].name;
  var description = data.projects[i].description;
  var repository = data.projects[i].repository;
  var picture = data.projects[i].picture;
  var card = document.createElement('div');
  card.className = "Card";
  card.innerHTML = `
    <img src=${picture} alt="Picture from Project">
    <span>
        <h1>
            <a href=${repository} target="_blank">
                ${name}
            </a>
        </h1>
        <p>${description}</p>
    </span>
    `;
  div.appendChild(card);
}
console.log(data);