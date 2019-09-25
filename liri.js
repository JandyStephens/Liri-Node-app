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
var Spotify = require("./spotify.js");
var simon = require("./simon.js");

var command = process.argv[2];
// console.log(command);
var searchTerm = process.argv.slice(3).join("+");
// var mediaQuery = process.argv[3].slice(2).join("+");

if (command === "movie-this") {
  // function(getMovieData);
  Movie();
} else if (command === "concert-this") {
  //   function(getConcertData);
  Concert();
} else if (command === "spotify-this-song") {
  //   console.log("Spotify info here");
  Spotify(searchTerm);
} else if (command === "do-what-it-says") {
  // console.log(dataArr);
  simon();
} else {
  console.log("Command is unrecognized");
}
