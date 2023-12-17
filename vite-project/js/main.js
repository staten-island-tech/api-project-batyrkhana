import "../styles/style.css";
const name = "waitress";
const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
async function getData(url) {
    try {
        const response = await fetch(url);
        if(response.status != 200) {
            throw new Error(response.statusText);
        }
        console.log(response);
        const characterData = await response.json();
        console.log(characterData.results);
    } catch (error) {
        document.querySelector("h1").textContent = "";
    };
};
getData(url);

// hi

