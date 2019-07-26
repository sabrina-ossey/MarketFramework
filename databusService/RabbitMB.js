const amqp = require('amqplib');
const eventEmitter = require('events').EventEmitter();


// SEND MESSAGE

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {});
});

/* let lastRequestId = 1;



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
} */
