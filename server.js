const express = require('express')
const path = require('path')
const cors = require('cors');
const axios = require('axios')

const app = express();

const { PORT = 8080 } = process.env;
const URL = "https://www.flickr.com/services/feeds/photos_public.gne";

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/flickr/:tags', (req, res) => {
  axios
    .get(`${URL}?lang=en-us&format=json&nojsoncallback=true&tags=${req.params.tags}`)
    .then(result => res.json(result.data));
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, () =>
  console.log(`Flickr Public Feed App Server listening on port ${PORT || 8080}!`),
);