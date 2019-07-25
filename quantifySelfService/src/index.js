const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const amqp = require('amqplib');
const fs = require('fs');
var path = require('path');
const eventEmitter = require('events').EventEmitter()

const app = express();
const PORT = 3001;

const Quantify = require('./quantify-self');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// simulate request IDs
let lastRequestId = 1;



// handle a request
app.post('/quantify/sendData', async function (req, res){
  let requestId = lastRequestId;
  lastRequestId++;

  let connection = await amqp.connect('amqp://localhost');
  let channel = await connection.createConfirmChannel();

//publishthe data to RabbitMQ

let requestData = req.body.data;
console.log("Published a request message, requestedId:", requestId)
await publishToChannel(channel, { routingKey: "request", exchangeName:"processing", data: {requestId, requestData}});

res.send({ requestId});

});

// utility function to publish messages to a channel
function publishToChannel(channel, { routingKey, exchangeName, data }) {
  return new Promise((resolve, reject) => {
    channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(data), 'utf-8'), { persistent: true }, function (err, ok) {
      if (err) {
        return reject(err);
      }

      resolve();
    })
  });
}

async function listenForResults() {
  // connect to Rabbit MQ
  let connection = await amqp.connect('amqp://localhost');

  // create a channel and prefetch 1 message at a time
  let channel = await connection.createChannel();
  await channel.prefetch(1);

  // start consuming messages
  await consume({ connection, channel });
}


// consume messages from RabbitMQ
function consume({ connection, channel, resultsChannel }) {
  return new Promise((resolve, reject) => {
    channel.consume("processing.results", async function (msg) {
      // parse message
      let msgBody = msg.content.toString();
      let data = JSON.parse(msgBody);
      let requestId = data.requestId;
      let processingResults = data.processingResults;
      console.log("Received a result message, requestId:", requestId, "processingResults:", processingResults);

      // acknowledge message as received
      await channel.ack(msg);
    });

    // handle connection closed
    connection.on("close", (err) => {
      return reject(err);
    });

    // handle errors
    connection.on("error", (err) => {
      return reject(err);
    });
  });
}


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
    res.status(200).json({
      count: docs.length,
      transport: docs.map(doc =>{
        return {
          _id: doc._id,
          request:{
        type:'GET',
        url:'http://localhost:3001/quantify/' + doc._id
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


 //listen for results on RabbitMQ
 listenForResults();

// start the https server

https.createServer({
  key: fs.readFileSync(path.resolve(__dirname, 'keys/client.key')),
  cert: fs.readFileSync(path.resolve(__dirname, 'keys/client.crt'))
}, app).listen(PORT, () => {
  console.log('Server started! At http://localhost:' + PORT);
});
