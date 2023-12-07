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


/*
Array Methods: 
    Project properly utilizes array methods for iteration/displaying data
Vite Scaffolding: 
    Use Vite and Vite config to scaffold your project.
Promise Handling: 
    rejected promises receive proper error handling alerting the user to why a request failed. 
    Fulfilled promises result in data being displayed in the HTML as requested
Form Handling: 
    search functionality is handled with logic to prevent blank fields.
    Forms are used to get data from an API
Reusable code/Modern Code: 
    Functions are abstracted to allow for reusability.
Global Variables: 
    Project minimizes the use of global variables by storing them in JS Objects
Version Control: 
    Project uses git branches to maintain version control. 
    Project should included a development branch 
    Project should be hosted off the main branch which contains only mergers
Communication: 
    Students can clearly communicate and explain their understanding of their functions and how their project works
Accessibility: 
    use of semantic HTML,
    appropriate contrast, 
    passes WAVE
    Responsive Layouts 
    Site uses media queries, 
    REM, % and flexbox for responsive layouts
*/


/*
https://api.artic.edu/docs/#quick-start
https://github.com/cheatsnake/emojihub
https://php-noise.com/
https://docs.api.bible/
https://holidayapi.com/
https://agify.io/
https://genderize.io/
https://glitterly.app/
https://cloud.ibm.com/docs/text-to-speech/getting-started.html
https://nationalize.io/
https://imgflip.com/api
https://github.com/sameerkumar18/corporate-bs-generator-api
https://country.is/
https://isitwater.com/
https://chroniclingamerica.loc.gov/about/api/
*/