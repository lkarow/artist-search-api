const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: './temp/artist.csv',
  header: [
    { id: 'name', title: 'NAME' },
    { id: 'mbid', title: 'MBID' },
    { id: 'url', title: 'URL' },
    { id: 'image', title: 'IMAGE' },
  ],
});

module.exports = async function saveCsv(data) {
  const inputData = [
    {
      name: data.name,
      mbid: data.mbid,
      url: data.url,
      image: data.image[0]['#text'],
    },
  ];

  try {
    await csvWriter.writeRecords(inputData);
    console.log('Saved file');
  } catch (error) {
    console.log(error);
  }
};
