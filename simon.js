var fs = require("fs");
var Spotify = require("./spotify.js");

function simon() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    // console.log(data);
    var dataArr = data.split(",");
    // console.log(dataArr[1]);
    Spotify(dataArr[1]);
  });
}

module.exports = simon;
