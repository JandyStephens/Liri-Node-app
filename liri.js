require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var moment = require("moment");
// moment().format();
var nodeSpotify = require("node-spotify-api");
var dotenv = require("dotenv");
var fs = require("fs");

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
    concertArtist = "Billie Eilish";
    // console.log(concertArtist);
  }
  var concertUrl =
    "https://rest.bandsintown.com/artists/" +
    concertArtist +
    "/events?app_id=codingbootcamp";
  axios.get(concertUrl).then(function(response) {
    // console.log(response.data);
    var concertData = {
      artist: concertArtist,
      venue: response.data[0].venue.name,
      location:
        response.data[0].venue.city +
        ", " +
        response.data[0].venue.region +
        " " +
        response.data[0].venue.country,
      date: moment(response.data[0].datetime).format("MM DD YYYY")
    };
    // .catch(function(error) {
    //   //   throw error;
    //   console.log("No known upcoming concerts at this time");
    // });
    console.log(concertData);
  });
}

function getSpotifySong() {
  var song = process.argv.slice(3).join("+");
  if (!song) {
    song = "The Sign";
    // console.log(song);
  }
  console.log(song);
}

if (command === "movie-this") {
  // function(getMovieData);
  getMovieData();
} else if (command === "concert-this") {
  //   function(getConcertData);
  getConcertData();
} else if (command === "spotify-this-song") {
  //   console.log("Spotify info here");
  getSpotifySong();
}

// else if (command === "do-what-it-says") {
//   console.log("TODO: after spotify setup");
// }
