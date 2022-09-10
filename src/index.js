const express = require('express');
const router = require('./routes');

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(router);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
