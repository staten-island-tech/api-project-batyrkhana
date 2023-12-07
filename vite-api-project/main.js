import './style.css'
const url = `https://rickandmortyapi.com/api/character`;

async function getData(url) {
  try {
      const response = await fetch(url);
      if(response.status != 200) {
        throw new Error(response.statusText);
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
  } catch (error) {
      document.querySelector("h1").textContent = "";
  }
}

getData(url);