const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
var mongoose = require('mongoose')
    , _ = require( 'lodash' )
	, quantifyData = require( './quantifyData.json' );
const amqp = require('amqplib');
const fs = require('fs');
var path = require('path');
const eventEmitter = require('events').EventEmitter()

const app = express();
const PORT = 3001;

const Quantify = require('./quantify-self');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Connect to DB
mongoose.connect('mongodb://localhost/quantify',  { useNewUrlParser: true })
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

 app.get('/quantify', (req, res, next) => {
  Quantify
  .find()
  //.select('journeyInstance TransactionDate Destination EndTime StartTime Origin')
  //.populate('journeyInstance','TransactionDate' )
  .exec()
  .then(docs =>{
    res.status(200).json(docs);/*{
      count: docs.length,
      quantify: docs.map(doc =>{
        return {
          _id: doc._id,
          request:{
        type:'GET',
        url:'http://localhost:3001/quantify/' + doc._id
      }
    }
    })
  });*/
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});


 app.use((req, res, next) => {
   const error = new Error('Not found');
   error.status = 404;
   next(error);
 });

 app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
     error:{
       message: error.message
     }
   });
 });


app.get ('/', (req, res) => {
  res.send('hello Https!')
  console.log('test');
});

// start the https server

https.createServer({
  key: fs.readFileSync(path.resolve(__dirname, 'keys/client.key')),
  cert: fs.readFileSync(path.resolve(__dirname, 'keys/client.crt'))
}, app).listen(PORT, () => {
  console.log('Server started! At http://localhost:' + PORT);
});
