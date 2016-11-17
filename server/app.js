"use strict"

let express = require("express");
let app = express();

let mongoUtil = require('./mongoUtil');
mongoUtil.connect();

app.set('port',(process.env.PORT || 8000));

app.use(express.static(__dirname + "/../client") );

let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

app.get("/languages", (req, res) => {
  let languages = mongoUtil.languages();
  languages.find().toArray((err,docs) => {
    if(err) {
      res.sendStatus(400);
    }
    console.log(JSON.stringify(docs));
    let languagesNames = docs.map((language) => language.name);
    res.json(languagesNames);
  });
});




app.listen(app.get('port'), () => {
console.log("Listening on", app.get('port'));
});
