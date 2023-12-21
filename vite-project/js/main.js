import "../styles/style.css";
import { DOMSelectors } from "./dom";

const characterDataArray = [];

//Gets the URL from the URL Coverter function to get the data from the API.
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
        console.log(characterDataArray)
        //do foreach on each data and push it
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
        console.log(response);
        const locationData = await response.json();
        console.log(locationData.results);
        location
        //const locationDataArray = [];
        //try to save a json response as an array
        
        locationData.results.array.forEach(element => {
            console.log(element)
        });
        const dataNew = locationDataArray.push(locationData.results);
        console.log(dataNew);
    } catch (error) {
        console.log("Oh no you got the following error! " + error);
    };
};
function createCharacterCard(characterData){
    DOMSelectors.mainOutput.insertAdjacentHTML("beforeend",
    `<div class="created-card">
      <img src=${characterData.image} alt="Album Cover" class="card-img">
      <h1 class="card-albumName">${DOMSelectors.characterData.value}</h1>
      <h2 class="card-release">${DOMSelectors.char.value}</h2>
      <h3 class="card-artist">${DOMSelectors.albumArtist.value}</h3>
      <button class="delete">DELETE</button>
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
    //createCard();
});
DOMSelectors.locationsForm.addEventListener('submit', function locationsURLConverter(submitLocation) {
    submitLocation.preventDefault();
    const locnName = encodeURIComponent(DOMSelectors.locationsName.value);
    const locnType = encodeURIComponent(DOMSelectors.locationsType.value);
    const locnDimension = encodeURIComponent(DOMSelectors.locationsDimension.value);
    const locnURL = `https://rickandmortyapi.com/api/location/?page=&name=${locnName}&type=${locnType}&dimension${locnDimension}`;
    getLocnData(locnURL);
    clearLocationsInput();
    //createCard();
});

//locationData.forEach((location)=>createCharacterCard(location));
