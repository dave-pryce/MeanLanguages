"use strict"

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
  connect() {
    //prod
    //client.connect(process.env.MONGODB_URI, (err, db) =>{

    // dev
    client.connect('mongodb://localhost:27017/languages-dev', (err, db) =>{
      if(err) {
        console.log("Error connecting to Mongo");
        process.exit(1);
      }
      _db = db;
      console.log("Connected to Mongo");
    });
  },
  languages(){
    return _db.collection('languages');
  }
}
