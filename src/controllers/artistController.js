const axios = require('axios').default;
require('dotenv').config();

const saveCsv = require('../services/csvService');
const randomArtist = require('../services/rndArtistService');

const apiUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.search';
const API_KEY = process.env.API_KEY;

const getArtist = async (req, res) => {
  try {
    let response = await axios(
      `${apiUrl}&artist=${req.params.artist}&api_key=${API_KEY}&format=json`
    );
    if (!response.data.results.artistmatches.artist[0]) {
      res.statusMessage = `Artist "${req.params.artist}" was not found, name of a random artist was sent instead.`;
      res.status(400).send(randomArtist());
    }
    if (response.data.results.artistmatches.artist[0]) {
      saveCsv(response.data.results.artistmatches.artist[0]);
      res.status(201).send('Data of artist saved in CSV file.');
    }
  } catch (error) {
    res.status(500).send(`An error occured: ${error}`);
  }
};

module.exports = { getArtist };
