const DOMSelectors = {
    mainOutput: document.getElementById("main-output-card"),
    characterForm: document.getElementById("formCharacters"),
    characterPageNum: document.getElementById("q-character-pageNum-input"),
    characterName: document.getElementById("q-character-name-input"),
    characterStatus: document.getElementById("q-character-status-input"),
    characterSpecies: document.getElementById("q-character-species-input"),
    characterGender: document.getElementById("q-character-gender-input"),
    characterLocation: document.getElementById("q-character-location-input"),
    characterSubmit: document.getElementById("q-character-submit"),

    locationsForm: document.getElementById("formLocations"),
    locationsPageNum: document.getElementById("q-location-pageNum-input"),
    locationsName: document.getElementById("q-location-name-input"),
    locationsType: document.getElementById("q-location-type-input"),
    locationsDimension: document.getElementById("q-location-dimension-input"),
    locationsSubmit: document.getElementById("q-location-submit"),

    deleteCard: document.getElementById("deleteCharacterBtn"),
    modal: document.getElementById("characterModal"),
    closeXBtn: document.querySelector('.close'),
}
export {DOMSelectors};