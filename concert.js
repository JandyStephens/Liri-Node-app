var axios = require("axios");
var moment = require("moment");

function getConcertData(concertArtist) {
  //   var concertArtist = process.argv.slice(3).join("+");
  //   console.log(concertArtist);

  if (!concertArtist) {
    console.log("You didn't enter a band to search. Here's a recommendation!");
    concertArtist = "Billie Eilish";
    // console.log(concertArtist);
  }
  //   console.log(concertArtist);

  var concertUrl =
    "https://rest.bandsintown.com/artists/" +
    concertArtist.trim() +
    "/events?app_id=codingbootcamp";
  axios
    .get(concertUrl)
    .then(function(response) {
      //   console.log(response.data);
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
    })
    .catch(function(err) {
      console.log(err);
    });
}

module.exports = getConcertData;
