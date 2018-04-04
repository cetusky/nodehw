require("dotenv").config();
var request = require("request")
var keys = require('./keys');

var inputString = '';
for (i = 3; i < process.argv.length; i++) {
    inputString += process.argv[i] + " ";
}
switch (process.argv[2]) {
    case 'my-tweets':
        break;
    case 'movie-this':
        console.log('my-tweets')
        console.log(keys.ombd.key);

        request("http://www.omdbapi.com/?apikey=" + keys.ombd.key + "&t=" + inputString, function (error, response, body) {

            // If the request was successful...
            if (!error && response.statusCode === 200) {

                //   * Title of the movie.
                //  * Year the movie came out.
                //  * IMDB Rating of the movie.
                //  * Rotten Tomatoes Rating of the movie.
                //  * Country where the movie was produced.
                //  * Language of the movie.
                //  * Plot of the movie.
                //  * Actors in the movie.
                console.log(JSON.parse(body).Title);
                console.log(JSON.parse(body).Year);
                console.log(JSON.parse(body).imdbRating);
                console.log(JSON.parse(body).Ratings[1].Value);
                console.log(JSON.parse(body).Country);
                console.log(JSON.parse(body).Language);
                console.log(JSON.parse(body).Plot);
                console.log(JSON.parse(body).Actors);
                // Then log the body from the site!
            }
        });
        break;
}