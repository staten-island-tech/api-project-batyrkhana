import "../styles/style.css";
import { DOMSelectors } from "./dom";

const characterDataArray = [];
const locationDataArray = [];

//Gets the URL from the URL Converter function to get the data from the API.
async function getCharData(charURL) {
    try {
        //Looks at the status value and produces error messages based on it.
        const response = await fetch(charURL);
        if(!response.ok) {
            if (response.status === 404) {
                throw new Error("404 Data not Found. Oh no! Check if your input is correct.");
            } else if (response.status === 403) {
                throw new Error("403 Access forbidden. Well this shouldn't happen...");
            } else {
                throw new Error(response.status + ". Idk what to tell you, try searching for this error on the web.");
            };
        }; 
        console.log(response); //Status for the response
        const characterData = await response.json();
        console.log(characterData.results); //Status on API data retrieval
        characterData.results.forEach(character => characterDataArray.push(character));
        console.log(characterDataArray) //Status on characterDataArray API data insert
        characterDataArray.forEach((character) => createCharacterCard(character));
        console.log("Character Card Created"); // Status on characterDataArray cards creation
        characterDataArray.length = 0;
        console.log(characterDataArray); // Status on cleared Data Array
    } catch (error) {
        console.log("Oh no you got the following error! " + error);
    };
};
const getLocationData = async function getLocnData(locnURL) {
    try {
        //Looks at the status value and produces error messages based on it.
        const response = await fetch(locnURL);
        if(!response.ok) {
            if (response.status === 404) {
                throw new Error("404 Data not Found. Oh no! Check if your input is correct.");
            } else if (response.status === 403) {
                throw new Error("403 Access forbidden. Well this shouldn't happen...");
            } else {
                throw new Error(response.status + ". Idk what to tell you, try searching for this error on the web.");
            };
        }; 
        console.log(response);
        const locationData = await response.json();
        console.log(locationData.results);
        locationData.results.forEach(location => locationDataArray.push(location));
        console.log(locationDataArray)
    } catch (error) {
        console.log("Oh no you got the following error! " + error);
    };
};
const createCharacterCard = function(characterDataArray){
    if (characterDataArray.type === "") {
        characterDataArray.type = "unknown";
    }
    DOMSelectors.mainOutput.insertAdjacentHTML("afterbegin",
    `<div class="created-character-card">
        <div class="created-character-card-data">
        <img src=${characterDataArray.image} alt="${characterDataArray.name} image" class="created-character-img">
        <h1 class="created-character-name">Character Name: ${characterDataArray.name}</h1>
        <h2 class="created-character-gender">Gender: ${characterDataArray.gender}</h2>
        <h2 class="created-character-location">Current Location: ${characterDataArray.location.name}</h2>
        <h2 class="created-character-origin-name">Origin: ${characterDataArray.origin.name}</h2>
        <h2 class="created-character-status">Status: ${characterDataArray.status}</h2>
        <h2 class="created-character-species">Species: ${characterDataArray.species}</h2>
        <h2 class="created-character-type">Type: ${characterDataArray.type}</h2>
        </div>
        <div class="created-character-delete">
        <button class="delete">DELETE</button>
        </div>
    </div>`);
};
function clearCharacterInput() {
    DOMSelectors.characterForm.value = "";
    DOMSelectors.characterName.value = "";
    DOMSelectors.characterStatus.value = "";
    DOMSelectors.characterSpecies.value = "";
    DOMSelectors.characterGender.value = "";
    DOMSelectors.characterLocation.value = "";
};
function clearLocationsInput() {
    DOMSelectors.locationsName.value = "";
    DOMSelectors.locationsType.value = "";
    DOMSelectors.locationsDimension.value = "";
};

DOMSelectors.mainOutput.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete')) {
    const card = event.target.closest('.created-character-card');
    if (card) {
      card.remove(); // Remove the card from the DOM
    }
  }
});
/*function deleteCharacterCards () {
    characterDataArray.forEach((character) => {
      submitCharacter.addEventListener("click", function (character) {
        character.target.parentElement.remove();
      })
    });
  }*/
// Takes the values of the individual user input fields and adds them as URL parameters.
// encodeURIComponent ensures that the replaced URL parameters would not interfere in the functionality of the URL
DOMSelectors.characterForm.addEventListener('submit', function characterURLConverter(submitCharacter) {
    submitCharacter.preventDefault(); 
    const charName = encodeURIComponent(DOMSelectors.characterName.value);
    const charStatus = encodeURIComponent(DOMSelectors.characterStatus.value);
    const charSpecies = encodeURIComponent(DOMSelectors.characterSpecies.value);
    const charGender = encodeURIComponent(DOMSelectors.characterGender.value);
    const charLocation = encodeURIComponent(DOMSelectors.characterLocation.value);
    const charURL = `https://rickandmortyapi.com/api/character/?page=&name=${charName}&status=${charStatus}&species=${charSpecies}&gender=${charGender}&location=${charLocation}`;
    getCharData(charURL);
    clearCharacterInput();
});
DOMSelectors.locationsForm.addEventListener('submit', function locationsURLConverter(submitLocation) {
    submitLocation.preventDefault();
    const locnName = encodeURIComponent(DOMSelectors.locationsName.value);
    const locnType = encodeURIComponent(DOMSelectors.locationsType.value);
    const locnDimension = encodeURIComponent(DOMSelectors.locationsDimension.value);
    const locnURL = `https://rickandmortyapi.com/api/location/?page=&name=${locnName}&type=${locnType}&dimension${locnDimension}`;
    getLocationData(locnURL);
    clearLocationsInput();
});
