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
    function addListItem(pokemon) {
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      button.innerHTML = pokemon.name; // text inside the button
      button.classList.add('btn'); //adding a classlist for the button
      listItem.appendChild(button);
      list.appendChild(listItem);
      
      button.addEventListener("Click me", (event) {
        showDetails(pokemon);
      });
    }
    return {
      add: add,
      getAll: getAll
    };

})();

//calling the respository and getAll unctions here
pokemonRepository.getAll().forEach(function(pokemon) {
if (pokemon.height < 35 && pokemon.height > 0) {

}
else if (pokemon.height < 60 && pokemon.height > 36 ) {

}
else{

}
});


