const artistData = require('../data/artist-data.json');

module.exports = function randomArtist() {
  return artistData[Math.floor(Math.random() * artistData.length)];
};
