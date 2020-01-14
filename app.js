const express = require('express');
const app = express();
const setupFile = require('./knexfile').development

var knex = require('knex')({
    client: setupFile.client,
    connection: setupFile.connection,
    pool: { min: 0, max: 7 }
  })

app.get('/', (req, res) => {
    res.send("To use this website, use /showall")
});

app.get('/showall', (req, res) => {
    knex('entries').select('*')
    .then(function(activities) {
        res.status(200).json(activities);
      })
      .catch(function(error) {
        next(error);
      });
});

app.post('/add', (req, res, next) => {
    knex('entries')
    .insert(req.query)
    .then(function (){
        res.redirect('/showAll')
    })
    .catch(function(error) {
        next(error);
      });
    console.log(req.query)
})

app.listen(3000, () => console.log("listening on port 3000" ));
