const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
// Require external modules
const mongoose = require('mongoose');
const amqp = require('amqplib');


const Transport = require('./transport');

const transportRoutes = require('./routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// simulate request IDs
let lastRequestId = 1;

// handle a request
app.post('/transport/sendData', async function (req, res){
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
mongoose.connect('mongodb://localhost/transportation',  { useNewUrlParser: true })
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

 app.get('/transport', (req, res, next) => {
  Transport
  .find()
  .select('journeyInstance TransactionDate Destination EndTime StartTime Origin')
  //.populate('journeyInstance','TransactionDate' )
  .exec()
  .then(docs =>{
    res.status(200).json({
      count: docs.length,
      transport: docs.map(doc =>{
        return {
          _id: doc._id,
          journeyInstance: doc.journeyInstance,
          TransactionDate: doc.TransactionDate,
          request:{
        type:'GET',
        url:'http://localhost:3000/transport/' + doc._id
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

app.post('/transport', (req, res, next) => {
  console.log(Transport);
        const transport = new Transport({
        _id: mongoose.Types.ObjectId(),
        journeyInstance:  req.body.journeyInstance,
        TransactionDate:  req.body.TransactionDate,
        Destination:  req.body.Destination,
        EndTime:  req.body.EndTime,
        StartTime:  req.body.StartTime,
        Origin:  req.body.Origin,
      });
      transport
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message:"Creating transport successfully",
          createdTransport: { // perform mapping
            journeyInstance:  result.journeyInstance,
            TransactionDate: result.TransactionDate,
            Destination:  result.Destination,
            EndTime:  result.EndTime,
            StartTime:  result.StartTime,
            Origin:  result.Origin,
            _id: result._id,
            request: {
              type: 'POST',
              url: "http://localhost:3000/api/transports" + result._id
            }
          }
        });
      })
    .catch(err => {
      console.log(err);
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

 app.get('/', function(req, res) {
    res.send('Vous êtes à l\'accueil');
});

const PORT = 3001;

server = http.createServer(app);
server.listen(PORT, "localhost", function(err) {
  if(err) {
    consolde.error(err);
  } else {
    console.info("listening on port %s.", PORT);
  }
});


 //listen for results on RabbitMQ
 listenForResults();
