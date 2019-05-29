// External Dependancies
const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  journeyInstance: String,
  TransactionDate: String,
  Destination: String,
  EndTime: String,
  StartTime: String,
  Origin: String,
  /*vehicules: {
    type: String,
    Company: String
  }*/
});

module.exports = mongoose.model('Transport', transportSchema);
