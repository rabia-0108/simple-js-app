let pokemonList = [
  { name:'Squirtle', type: ['water'], height: 50.8, pokedexNumber:'#07' },
  { name:'Slowbro', type:['water', 'psychic'], height: 152.5, pokedexNumber:'#80' },
  { name: 'Roselia', type: ['grass', 'poison'], height: 30.48, pokedexNumber:'#315'}
];



for (let i = 0; i < pokemonList.length; i++ ) {
  document.write('<br>' + pokemonList[i].name + (' (height)') + pokemonList[i].height  ) ;
if (pokemonList[i].height < 35  && pokemonList[i].height > 0) {
// Roselia's height 
document.write(' She is a small baddie.');
}
else if (pokemonList[i].height < 60 && pokemonList[i].height > 36 ) {
   document.write(' This buddy here is a midsize Pokemon');
// Squrtile's height
}
else (pokemonList[i].height > 150) {
// Slowbro's height
}
}

