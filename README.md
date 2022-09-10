# artist-search-api

## Description

The REST API application is written in Node.js. You can search for an artist by calling the endpoint `/artists/[artist name]`. The app fetches the data from the endpoint artist.search of the Last.fm API. The data of this artist is written to a CSV file. The file contains the following information about the artist: name, mbid, URL to the entry on Last.fm for the artist, and a URL for a small image. The file will be saved in `temp/artists.csv`. If the Last.fm API doesn't provide artist information, the name of a random artist from the JSON file (artist-data.json) will be returned.

## Endpoint

### Get data of artist

<strong>Endpoint:</strong> `/artists/[artist name]`

<strong>HTTP method:</strong> GET

## Dependencies

- axios
- body-parser
- cs-writer
- dot-env
- express

## Get the app running

Clone the repository, install all dependencies with `npm install`

To use the application you need a Last.fm API Key. You can sign up [here](https://www.last.fm/api/account/create). Once you have a key, create an `.env` file with an environment variable called API_KEY.

Run the application with the command:

```bash
npm start
```
