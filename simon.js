var fs = require("fs");
var Movie = require("./movie.js");
var Spotify = require("./spotify.js");
var Concert = require("./concert.js");

function simon() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    // console.log(data);
    var dataArr = data.split(",");
    // console.log(dataArr[1]);

    if (dataArr[0] === "movie-this") {
      // functparam1MovieData);
      Movie(dataArr[1]);
      console.log(dataArr[1]);
    } else if (dataArr[0] === "concert-this") {
      //   function(getConcertData);
      // console.log(dataArr[1]);
      Concert(dataArr[1]);
    } else if (dataArr[0] === "spotify-this-song") {
      //   console.log("Spotify info here");
      Spotify(dataArr[1]);
    }
    // else if (param1 === "do-what-it-says") {
    //   // console.log(dataArr);
    //   simon();
    // }
    else {
      console.log(
        "Command unrecognized. Accepted commands: 'movie-this''concert-this''spotify-this-song''do-what-it-says'"
      );
    }

    // Spotify(dataArr[1]);
  });
}

module.exports = simon;
