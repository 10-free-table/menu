const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const db = require('../database');
const path = require('path');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/menu/:pageId', (req, res) => {
  db.getMenuWithPageId(req.params.pageId, (data) => {
    res.send(data);
  });
});

app.get('/:pageId', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});