const puppeteer = require('puppeteer');

async function scrapeCharacterInfo(characterNames) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const characterData = [];

    for (const name of characterNames) {
        const formattedName = name.replace(' ', '_');
        const url = `https://rickandmorty.fandom.com/wiki/${formattedName}`;

        try {
            await page.goto(url);
            await page.waitForSelector('.mw-parser-output');

            const characterInfo = await page.evaluate(() => {
                const parserOutput = document.querySelector('.mw-parser-output');
                const asideElements = parserOutput.querySelectorAll('aside');
                asideElements.forEach(aside => aside.remove());

                const adSlotPlaceholders = parserOutput.querySelectorAll('.ad-slot-placeholder.incontent-leaderboard');
                adSlotPlaceholders.forEach(ad => ad.remove());

                const figureElements = parserOutput.querySelectorAll('figure');
                figureElements.forEach(figure => figure.remove());

                const tableElements = parserOutput.querySelectorAll('table');
                tableElements.forEach(table => table.remove());

                const sections = parserOutput.querySelectorAll('h2');

                const data = {
                    name: document.querySelector('.page-header__title').textContent.trim(),
                    biography: '',
                    appearance: '',
                    personality: '',
                    relationships: ''
                };

                for (let i = 0; i < sections.length; i++) {
                    const sectionTitle = sections[i].textContent.trim();
                    let content = '';
                    let nextElement = sections[i].nextElementSibling;

                    while (nextElement && nextElement.tagName !== 'H2') {
                        if (!nextElement.matches('table, .ad-slot-placeholder.incontent-leaderboard, figure')) {
                            content += nextElement.textContent.trim() + '\n';
                        }
                        nextElement = nextElement.nextElementSibling;
                    }

                    if (sectionTitle.includes('Appearance')) {
                        data.appearance = content;
                    } else if (sectionTitle.includes('Personality')) {
                        data.personality = content;
                    } else if (sectionTitle.includes('Biography')) {
                        data.biography = content;
                    } else if (sectionTitle.includes('Relationships')) {
                        data.relationships = content;
                    } else if (sectionTitle.includes('About')) {
                        data.relationships = content;
                    }
                }

                return data;
            });

            characterData.push(characterInfo);
        } catch (error) {
            characterData.push({ name, about: '', appearance: '', personality: '', biography: '', relationships: '', error: 'Character not found or error fetching data' });
        }
    }

    await browser.close();
    return characterData;
}

// Example array of character names
const characters = ['Rick_Sanchez'];

// Scrape information for the provided characters
scrapeCharacterInfo(characters)
    .then(characterData => {
        const newData = characterData.map(character => ({
            name: character.name,
            biography: character.biography,
            appearance: character.appearance,
            personality: character.personality,
            relationships: character.relationships,
        }));
        console.log('New Character Information:', newData);
        // You can use this data as needed, such as saving it to a file or processing it further
    })
    .catch(error => {
        console.error('Error:', error);
    });
