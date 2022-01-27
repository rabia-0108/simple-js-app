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
    return {
      add: add,
      getAll: getAll
    };
})();

//calling the respository and getAll unctions here
pokemonRepository.getAll().forEach(function(pokemon) {
document.write('<br>' + pokemon.name + (' (height)') + pokemon.height ) ;
if (pokemon.height < 35 && pokemon.height > 0) {
// Roselia's height
document.write(' She is a small baddie.');
}
else if (pokemon.height < 60 && pokemon.height > 36 ) {
document.write(' This buddy here is a midsize Pokemon');
// Squrtile's height
}
else{
// Slowbro's height
document.write(' This buddy here is a massive Pokemon');
}
});
