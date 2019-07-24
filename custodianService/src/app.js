const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const Custodian = require('./custodian');
const mongoose = require('mongoose');
const fs = require('fs');
var path = require('path');


const app = express();
var port = process.env.PORT || 3004;

// Connect to DB
mongoose.connect('mongodb://localhost/custodian',  { useNewUrlParser: true })
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies







app.post('/custodian', (req, res, next) => {
  const custodian = new Custodian(request.body);
  custodian
  .save()
  .then(result => {
    console.log(result);
    res.status(201).json({
      result
    });
    })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});


app.get('/custodian',(req, res, next) => {
 Custodian
 .find()
 //.select('journeyInstance TransactionDate Destination EndTime StartTime Origin')
 //.populate('journeyInstance','TransactionDate' )
 .exec()
 .then(docs =>{
   res.status(200).json({
     count: docs.length,
     transport: docs.map(doc =>{
       return {
         _id: doc._id,
         request:{
       type:'GET',
       url:'http://localhost:3004/custodian/' + doc._id
     }
   }
   })
  });
 })
 .catch(err => {
   res.status(500).json({
     error: err
   });
 });
});

app.get ('/', (req, res) => {
  res.send('hello Https!')
});

// start the https server

https.createServer({
  key: fs.readFileSync(path.resolve(__dirname, 'keys/client.key')),
  cert: fs.readFileSync(path.resolve(__dirname, 'keys/client.crt'))
}, app).listen(port, () => {
  console.log('Server started! At http://localhost:' + port);
});
