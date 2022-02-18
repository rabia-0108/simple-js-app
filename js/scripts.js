let pokemonRepository = (function() {
let pokemonList = [
{ name:'Squirtle', type: ['water'], height: 50.8, pokedexNumber:'#07' },
{ name:'Slowbro', type:['water', 'psychic'], height: 152.5, pokedexNumber:'#80' },
{ name: 'Roselia', type: ['grass', 'poison'], height: 30.48, pokedexNumber:'#315'}
];

function add(pokemon) {
pokemonList.push(pokemon);
}
function getAll() {
return pokemonList;
}

function showDetails(pokemon) {
console.log(pokemon)
};

function addListItem(pokemon) {
let pokemonList = document.querySelector (".pokemon-list");
let listpokemon = document.createElement("li");
let button = document.createElement("button");
button.innerText = pokemon.name; // text inside the button
button.classList.add('btn'); //adding a classlist for the button
listpokemon.appendChild(button);
pokemonList.appendChild(listpokemon);

button.addEventListener("click", (event) => {
showDetails(pokemon)
});
}
return {
add: add,
getAll: getAll,
addListItem: addListItem
};

})();

//calling the respository and getAll unctions here
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon)
});
