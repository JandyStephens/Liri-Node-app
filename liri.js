require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var moment = require("moment");
// moment().format();
var nodeSpotify = require("node-spotify-api");
var dotenv = require("dotenv");
var fs = require("fs");

var Movie = require("./movie.js");
var Concert = require("./concert.js");

var command = process.argv[2];
// console.log(command);

// var mediaQuery = process.argv[3].slice(2).join("+");

function getSpotifySong() {
  var song = process.argv.slice(3).join("+");
  if (!song) {
    song = "The Sign by Ace of Base";
    // console.log(song);
  }
  //   console.log(song);

  //   console.log(keys);

  var spotify = new nodeSpotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });

  spotify
    .search({ type: "track", query: song, limit: 10 })
    .then(function(response) {
      for (let i = 0; i < response.tracks.items.length; i++) {
        // console.log(response.tracks.items[i].name);
        var songData = {
          songTitle: response.tracks.items[i].name,
          album: response.tracks.items[i].album.name,
          artist: response.tracks.items[i].artists[0].name,
          previewLink: response.tracks.items[i].preview_url
        };
        console.log(songData);
      }
    })
    .catch(function(err) {
      console.log(err);
    });

  // });
}

if (command === "movie-this") {
  // function(getMovieData);
  Movie();
} else if (command === "concert-this") {
  //   function(getConcertData);
  Concert();
} else if (command === "spotify-this-song") {
  //   console.log("Spotify info here");
  getSpotifySong();
}

// else if (command === "do-what-it-says") {
//   console.log("TODO: after spotify setup");
// }
