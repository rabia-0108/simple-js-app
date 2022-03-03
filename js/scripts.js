let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector(".modal-container");


function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "detailsUrl" in pokemon
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log("pokemon is not correct");
  }
  }

function getAll() {
return pokemonList;
};


function addListItem(pokemon) {
let pokemonList = document.querySelector (".pokemon-list");
let listpokemon = document.createElement("li");
let button = document.createElement("button");
button.innerText = pokemon.name; // text inside the button
button.classList.add('btn'); //adding a classlist for the button
listpokemon.appendChild(button);
pokemonList.appendChild(listpokemon);

button.addEventListener("click", function(event){
showDetails(pokemon);
});
}


function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
      console.log(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(){
      showModal(pokemon);
    });
  }

  function showModal(name, height, image) {
    document.querySelector('#show-modal').addEventListener('click', () => {
      showModal();

      //Generate a close button
            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            closeButtonElement.addEventListener('click', hideModal);


       let titleElement = document.createElement('h1');
           titleElement.innerText = name;

       let contentElement = document.createElement('p');
           contentElement.innerText = "Height: " + height;

       let imageElement = document.createElement('img');
             imageElement.classList.add('pokemon-image-class');
             imageElement.src = image;

      modal.appendChild(pokemonName);
      modal.appendChild(pokemonImage);
      modal.appendChild(pokemonHeight);
      modalContainer.appendChild(modal);
      modalContainer.classList.add('is-visible');
    }

    function hideModal() {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');
      }
      
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();


pokemonRepository.loadList().then(function() {
//calling the respository and getAll unctions here
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
});
});
