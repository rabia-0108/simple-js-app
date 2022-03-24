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

button.addEventListener("click", function(event) {
showDetails(pokemon);
})
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
loadDetails(pokemon).then(function() {
showModal(pokemon);
});
}

function showModal(pokemon) { // passing the correct parameter
  let modal = document.querySelector('#modal-container'); //fetch the modal container


  //sorts pokemon in numerical descending/ascending or alphabtical A-Z/Z-A order
    function sort() {
      let value = document.getElementById("options").value;
      let listBeforeSort = [];

      if (value === "Descending") {
        $(".pokemon-list").empty();
        repository.forEach((pokemon) => {
          addListItem(pokemon, value);
        });
      } else if (value === "Ascending") {
        $(".pokemon-list").empty();
        repository.forEach((pokemon) => {
          addListItem(pokemon, value);
        });
      } else if (value === "A-Z") {
        $(".pokemon-list").empty();
        for (i = 0; i < repository.length; i++) {
          listBeforeSort.push(repository[i]);
        }
        listBeforeSort.sort(dynamicSort("name"));
        listBeforeSort.forEach((pokemon) => {
          addListItem(pokemon, value);
        });
      } else if (value === "Z-A") {
        $(".pokemon-list").empty();
        for (i = 0; i < repository.length; i++) {
          listBeforeSort.push(repository[i]);
        }
        listBeforeSort.sort(dynamicSort("name"));
        let finalList = listBeforeSort.reverse();
        finalList.forEach((pokemon) => {
          addListItem(pokemon);
        });
      }
    }

    //alphabeical sorter
    function dynamicSort(property) {
      var sortOrder = 1;

      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }

      return function (a, b) {
        if (sortOrder == -1) {
          return b[property].localeCompare(a[property]);
        } else {
          return a[property].localeCompare(b[property]);
        }
      };
    }



//Generate a close button
let closeButtonElement = document.createElement('button');
closeButtonElement.classList.add('modal-close');
closeButtonElement.innerText = 'Close';
closeButtonElement.addEventListener('click', hideModal);

let titleElement = document.createElement('h1');
titleElement.innerText = pokemon.name;

let contentElement = document.createElement('p');
contentElement.innerText = "Height: " + pokemon.height;

let imageElement = document.createElement('img');
imageElement.classList.add('pokemon-image-class');
imageElement.src = pokemon.imageUrl;

modal.appendChild(closeButtonElement);
modal.appendChild(titleElement);
modal.appendChild(contentElement);
modal.appendChild(imageElement);
modal.classList.add('is-visible');
} //closing the show modal

function hideModal() {
let modalContainer = document.querySelector('#modal-container');
while (modalContainer.firstChild) {
  modalContainer.removeChild(modalContainer.firstChild);
}
modalContainer.classList.remove('is-visible');

window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});
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
