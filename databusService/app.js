require('dotenv').config();

const amqp = require('amqplib');

async function setup() {
  console.log("Setting up RabbitMQ Exchanges/Queues");
  // connect to RabbitMQ Instance
  let connection = await amqp.connect('amqp://localhost');

  // create a channel
  let channel = await connection.createChannel();

  // create exchange
  await channel.assertExchange("processing", "direct", { durable: true });

  // create queues
  await channel.assertQueue("processing.requests", { durable: true });
  await channel.assertQueue("processing.results", { durable: true });

  // bind queues
  await channel.bindQueue("processing.requests","processing", "request");
  await channel.bindQueue("processing.results","processing", "result");

  console.log("Setup DONE");
  process.exit();
}

setup();
