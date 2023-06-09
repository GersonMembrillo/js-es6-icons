/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

2- popolare le options della select della milestone 3 dinamicamente.
 */

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange',
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange',
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange',
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange',
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange',
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange',
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange',
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'orange',
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'green',
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'green',
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'green',
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'green',
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'blue',
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'blue',
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'blue',
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'blue',
	},
];

function createCard(card) {
	const cardTpl = `
  <div class="card">
					<div type="${card.type}" class="card-body">
						<i class="icon-${card.color} ${card.prefix}${card.family} ${card.prefix}${card.name}"></i>
						<p class="animal-name">${card.name}</p>
					</div>
				</div>`;
	return cardTpl;
}

function init() {
	const mainContainer = document.querySelector('.main-container');
	let content = '';
	for (let i = 0; i < icons.length; i++) {
		const template = createCard(icons[i]);
		content += template;
	}
	mainContainer.innerHTML = content;
}

init();
