import "../styles/style.css";
import { DOMSelectors } from "./dom";

const characterDataArray = [];

<<<<<<< Updated upstream
//Gets the URL from the URL Coverter function to get the data from the API.
=======
/* 
async function getCharData - What it does:
1. Grabs the URL from the URL Converter function to extract API data.
2. Grabs the API response and saves it as a .json file.
3. Inserts the extracted data into the empty characterDataArray.
4. Creates a card for each element in the characterDataArray.
5. After the cards have been created, clears the characterDataArray, setting it equal to 0.

*/
>>>>>>> Stashed changes
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
        console.log(response);
        const characterData = await response.json();
        console.log(characterData.results);
        characterData.results.forEach(character => characterDataArray.push(character));
<<<<<<< Updated upstream
        console.log(characterDataArray)
        //do foreach on each data and push it
=======
        console.log(characterDataArray) //Status on characterDataArray API data insert

        characterDataArray.forEach((character) => createCharacterCard(character));
        console.log("Character Card Created"); // Status on characterDataArray cards creation
        characterDataArray.length = 0;
        console.log(characterDataArray); // Status on cleared Data Array
>>>>>>> Stashed changes
    } catch (error) {
        console.log("Oh no you got the following error! " + error);
    };
};
async function getLocnData(locnURL) {
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
        console.log(response); //Status for the response
        const locationData = await response.json();
<<<<<<< Updated upstream
        console.log(locationData.results);
        location
        //const locationDataArray = [];
        //try to save a json response as an array
        
        locationData.results.array.forEach(element => {
            console.log(element)
        });
        const dataNew = locationDataArray.push(locationData.results);
        console.log(dataNew);
=======
        console.log(locationData.results); //Status on the API data retrieval
        locationData.results.forEach(location => locationDataArray.push(location));
        console.log(locationDataArray) //Status on locationDataArray API data insert

        locationDataArray.forEach((location)=>createLocationCard(location));
        console.log("Location Card Created"); //Status on locationDataArray cards creation
        locationDataArray.length = 0;
        console.log(locationDataArray); // Status on cleared Data Array
>>>>>>> Stashed changes
    } catch (error) {
        console.log("Oh no you got the following error! " + error);
    };
};
<<<<<<< Updated upstream
function createCharacterCard(characterData){
    DOMSelectors.mainOutput.insertAdjacentHTML("beforeend",
    `<div class="created-card">
      <img src=${characterData.image} alt="Album Cover" class="card-img">
      <h1 class="card-albumName">${DOMSelectors.characterData.value}</h1>
      <h2 class="card-release">${DOMSelectors.char.value}</h2>
      <h3 class="card-artist">${DOMSelectors.albumArtist.value}</h3>
      <button class="delete">DELETE</button>
    </div>`);
=======
const createCharacterCard = function(characterDataArray){
    if (characterDataArray.type === "") {characterDataArray.type = "unknown"};
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
        <div class="created-character-btns">
            <div class="created-character-deleteBtn">
                <button class="deleteCharacterBtn">DELETE</button>
            </div>
            <div class="created-character-infoBtn">
                <button class="infoCharacterBtn">More Information</button>
            </div>
        </div>
    </div>`)
>>>>>>> Stashed changes
};
const createLocationCard = function(locationDataArray){
  DOMSelectors.mainOutput.insertAdjacentHTML("afterbegin",
  `<div class="created-location-card">
  <div class="created-location-card-data">
      <h1 class="created-location-name">Location Name: ${locationDataArray.name}</h1>
      <h2 class="created-location-type">Location Type: ${locationDataArray.type}</h2>
      <h2 class="created-location-dimension">Location Dimension: ${locationDataArray.dimension}</h2>
  </div>
  <div class="created-location-btns">
      <div class="created-location-deleteBtn">
          <button class="deleteLocationBtn">DELETE</button>
      </div>
      <div class="created-location-infoBtn">
          <button class="infoLocationBtn">More Information</button>
      </div>
  </div>
</div>`)
};
// Function to open the modal
function openModal() {
  DOMSelectors.modal.style.display = "block";
  DOMSelectors.closeXBtn.addEventListener('click', closeModal);
}

// Function to close the modal
function closeModal() {
  DOMSelectors.modal.style.display = "none";
  DOMSelectors.closeXBtn.removeEventListener('click', closeModal);
}

// Event listener for "More Information" button to open the modal
DOMSelectors.mainOutput.addEventListener('click', function (event) {
  if (event.target.classList.contains('infoCharacterBtn')) {
      const characterId = event.target.closest('.created-character-card').dataset.characterId;
      openModal(characterId);
  }
});

function clearInputs() {
    DOMSelectors.characterPageNum.value = "";
    DOMSelectors.characterForm.value = "";
    DOMSelectors.characterName.value = "";
    DOMSelectors.characterStatus.value = "";
    DOMSelectors.characterSpecies.value = "";
    DOMSelectors.characterGender.value = "";
    DOMSelectors.characterLocation.value = "";
    DOMSelectors.locationsName.value = "";
    DOMSelectors.locationsType.value = "";
    DOMSelectors.locationsDimension.value = "";
};
<<<<<<< Updated upstream
=======
DOMSelectors.mainOutput.addEventListener('click', function (event) {
  if (event.target.classList.contains('deleteCharacterBtn')) {
    if (!confirm("Do you really want to do this?")) {
      e.preventDefault(); // ! => don't want to do this
    } else {
      const card = event.target.closest('.created-character-card');
      if (card) {
        card.remove(); // Remove the card from the DOM
      }
    }
  } else if (event.target.classList.contains('deleteLocationBtn')) {
    if (!confirm("Do you really want to do this?")) {
      e.preventDefault(); // ! => don't want to do this
    } else {
      const cardlocc = event.target.closest('.created-location-card');
      if (cardlocc) {
        cardlocc.remove(); // Remove the card from the DOM
      }
    }
  }
});
DOMSelectors.mainOutput.addEventListener('click', function (event) {
  if (event.target.classList.contains('deleteLocationBtn')) {
      if (!confirm("Do you really want to do this?")) {
          e.preventDefault(); // ! => don't want to do this
      } else {
          const cardlocc = event.target.closest('.created-location-card');
          if (cardlocc) {
              cardlocc.remove(); // Remove the card from the DOM
          }
      }
  }
});
>>>>>>> Stashed changes
// Takes the values of the individual user input fields and adds them as URL parameters.
// encodeURIComponent ensures that the replaced URL parameters would not interfere in the functionality of the URL
DOMSelectors.characterForm.addEventListener('submit', function characterURLConverter(submitCharacter) {
    submitCharacter.preventDefault(); 
    const charPageNum = encodeURIComponent(DOMSelectors.characterPageNum.value);
    const charName = encodeURIComponent(DOMSelectors.characterName.value);
    const charStatus = encodeURIComponent(DOMSelectors.characterStatus.value);
    const charSpecies = encodeURIComponent(DOMSelectors.characterSpecies.value);
    const charGender = encodeURIComponent(DOMSelectors.characterGender.value);
    const charLocation = encodeURIComponent(DOMSelectors.characterLocation.value);
    const charURL = `https://rickandmortyapi.com/api/character/?page=${charPageNum}&name=${charName}&status=${charStatus}&species=${charSpecies}&gender=${charGender}&location=${charLocation}`;
    getCharData(charURL);
<<<<<<< Updated upstream
    clearCharacterInput();
    //createCard();
=======
    clearInputs();
>>>>>>> Stashed changes
});
DOMSelectors.locationsForm.addEventListener('submit', function locationsURLConverter(submitLocation) {
    submitLocation.preventDefault();
    const locnPageNum = encodeURIComponent(DOMSelectors.locationsPageNum.value);
    const locnName = encodeURIComponent(DOMSelectors.locationsName.value);
    const locnType = encodeURIComponent(DOMSelectors.locationsType.value);
    const locnDimension = encodeURIComponent(DOMSelectors.locationsDimension.value);
<<<<<<< Updated upstream
    const locnURL = `https://rickandmortyapi.com/api/location/?page=&name=${locnName}&type=${locnType}&dimension${locnDimension}`;
    getLocnData(locnURL);
    clearLocationsInput();
    //createCard();
=======
    const locnURL = `https://rickandmortyapi.com/api/location/?page=${locnPageNum}&name=${locnName}&type=${locnType}&dimension${locnDimension}`;
    getLocationData(locnURL);
    clearInputs();
>>>>>>> Stashed changes
});

//locationData.forEach((location)=>createCharacterCard(location));
