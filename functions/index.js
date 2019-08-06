const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const express = require('express')
const app = express()
var cors = require('cors')
var path = require('path');
const fetch = require('node-fetch');

app.use(cors())

app.get('/', function(req, res, next) {
    fetch('https://us-central1-testmap-245407.cloudfunctions.net/hello_get', {
          method: 'POST',
          headers: { "Content-Type": "application/json;charset=UTF-8", 'Access-Control-Allow-Origin': '*'},
          body:JSON.stringify({name:"country/USA"})
      }).then(function(response) {
        return response.text();
      }).then(function(data) {
      console.log(data)
      res.send(data)
  })
  .catch(function(err){
    console.log(err)
  })
});