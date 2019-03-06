const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(pino);

const testData = {
  "sets":[
    {
      "id": 1,
      "title": "one",
    },
    {
      "id": 2,
      "title": "two",
    }
  ]
};


app.get('/top', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"data": testData}));
})

app.listen(3001, () =>
  console.log('Server running on localhost:3001')
)
