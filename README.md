# MEAN Stack

Code for a Simple MEAN stack application.

* MongoDB
* Express
* Angular
* Node

*Requires MongoDB server running*
Run MongoD on Local box.

## Developing

* `npm install` to resolve dependencies
* `npm install -g gulp` to install Gulp globally
* `npm run watch` to start transpile watch. This command will read files under `client/src` and generate a single file under `client/dist/bundle.js` which should be included by index.html
* `npm server/app.js` to start


* Mongo Commands
* `use languages-dev` - creates language DB / switches to languages
* `db.create('languages')` - Create languages collection.
* `db.language.insert({"name" : "MongoDB"})` creates document.
* `db.languages.find()` find all languages documents.
