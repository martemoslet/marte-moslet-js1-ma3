// question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=2b7ac9b606e6469792816596adc07ff3";

const resultsContainer = document.querySelector(".results");

async function getGames() {
    try {
        const response = await fetch(url);

        const results = await response.json();
    
        const allGames = results.results;
    
        resultsContainer.innerHTML = "";
    
        for(let i = 0; i < allGames.length; i++) {
            console.log(allGames[i].name);
            console.log(allGames[i].rating);
            console.log(allGames[i].tags.length);
    
    
            if(i===8) {
                break;
            }
    
            resultsContainer.innerHTML += `<div class="result">Game: ${allGames[i].name}<br>Rating: ${allGames[i].rating}<br>Tags: ${allGames[i].tags.length}</div>`;
        }
    }
    catch(error) {
        console.log("An error occorred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
    


}

getGames();