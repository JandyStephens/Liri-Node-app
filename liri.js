require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var moment = require("moment");
var nodeSpotify = require("node-spotify-api");
var dotenv = require("dotenv");

var command = process.argv[2];
// console.log(command);

// var mediaQuery = process.argv[3].slice(2).join("+");

function getMovieData() {
  var movieName = process.argv.slice(3).join("+");
  if (!movieName) {
    movieName = "Mr. Nobody";
    // console.log(movieName);
  }
  //   console.log(movieName);

  var movieUrl =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  axios.get(movieUrl).then(function(response) {
    // console.log(response.data);
    var movieData = {
      title: response.data.Title,
      year: response.data.Year,
      imdb: response.data.imdbRating,
      rotten: response.data.Ratings[1],
      country: response.data.Country,
      language: response.data.Language,
      plot: response.data.Plot,
      actors: response.data.Actors
      //   return(response.);
      //   return(response.);
      //   return(response.Country);
      //   return(response.Language);
      //   return(response.Plot);
      //   return(response.Actors);
      //   });
    };
    console.log(movieData);
  });
}

function getConcertData() {
  var concertArtist = process.argv.slice(3).join("+");
  //   console.log(concertArtist);

  if (!concertArtist) {
    concertArtist = "Spice Girls";
    // console.log(concertArtist);
  }
  var concertUrl =
    "https://rest.bandsintown.com/artists/" +
    concertArtist +
    "/events?app_id=codingbootcamp";
  axios.get(concertUrl).then(function(response) {
    // console.log(response.data);
    var concertData = {
      venue: response.data[0].venue.name,
      location:
        response.data[0].venue.city +
        ", " +
        response.data[0].venue.region +
        " " +
        response.data[0].venue.country,
      date: response.data[0].datetime
    };
    console.log(concertData);
  });
}

if (command === "movie-this") {
  // function(getMovieData);
  getMovieData();
} else if (command === "concert-this") {
  //   function(getConcertData);
  getConcertData();
}
