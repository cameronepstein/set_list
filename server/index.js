const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(pino);

const boilerRoomSetData = {
  "sets":[
    {
      "id": 1,
      "title": "ANKLEPANTS BOILER ROOM BERLIN LIVE SET",
      "video_link": "https://www.youtube.com/watch?v=Fb4bCgWkZRc",
      "set_time": "42:51",
    },
    {
      "id": 2,
      "title": "MOSES BOYD'S EXODUS - BOILER ROOM IN STEREO",
      "video_link": "https://www.youtube.com/watch?v=6SlTkV4UMPI",
      "set_time": "58:10",
    },
    {
      "id": 3,
      "title": "OVERMONO (TESSELA & TRUSS) BOILER ROOM LONDON LIVE SET",
      "video_link": "https://www.youtube.com/watch?v=BpA2n8bvpOk",
      "set_time": "48:36",
    }
  ]
};

app.get('/top', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(boilerRoomSetData));
})

app.listen(3001, () =>
  console.log('Server running on localhost:3001')
)

module.exports = app;
