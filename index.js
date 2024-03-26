import data from './portfolio.json' assert {type: 'json'}

const body = document.body;

// Creates Div for the 'cards'
const div = document.createElement('div');
div.className = "Projects";
body.append(div);

// Loops through portfolio.json and creates 'Cards.'
for (let i in data.projects) {
    let name = data.projects[i].name;
    let description = data.projects[i].description;
    let repository = data.projects[i].repository;
    let picture = data.projects[i].picture;

    let card = document.createElement('div');
    card.className = "Card";
    card.innerHTML = `
    <img src=${picture} alt="Picture from Project">
    <h1>
        <a href=${repository}>
            ${name}
        </a>
    </h1>
    <p>${description}</p>
    `;


    div.appendChild(card);
}

console.log(data);