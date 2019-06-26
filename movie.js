
 var imdb = require('imdb-api');



imdb
    .get(
        {name: 'The Toxic Avenger'}, 
        {apiKey: '82511dea', timeout: 30000}
    )
    .then(console.log)
    .catch(console.log);