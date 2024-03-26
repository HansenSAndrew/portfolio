import data from './portfolio.json' assert {type: 'json'}

// const body = document.body;
const body = document.body

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