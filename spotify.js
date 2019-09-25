var nodeSpotify = require("node-spotify-api");
var keys = require("./keys.js");

function getSpotifySong(song) {
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

module.exports = getSpotifySong;
