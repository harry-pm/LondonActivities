const express = require('express');
const app = express();
const setupFile = require('./knexfile').development

var knex = require('knex')({
    client: setupFile.client,
    connection: setupFile.connection,
    pool: { min: 0, max: 7 }
  })

app.get('/', (req, res) => {
    res.send("hello world")
});

app.get('/showall', (req, res) => {
    knex('entries').select('*')
    .then(function(shows) {
        res.status(200).json(shows);
      })
      .catch(function(error) {
        next(error);
      });
})

app.listen(3000, () => console.log("listening on port 3000" ));
