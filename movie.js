var axios = require("axios");

function getMovieData(movieName) {
  console.log(process.argv);

  //   var movieName = process.argv.slice(3).join("+");
  if (!movieName) {
    console.log("You didn't enter a movie to search. Here's a recommendation!");

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

module.exports = getMovieData;
