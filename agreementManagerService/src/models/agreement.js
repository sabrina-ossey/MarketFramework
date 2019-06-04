const mongoose = require('mongoose');

const agreementSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  term: String,
  ttype: String,
  description: String,
  purpose: String,
  owner: String,
  consumer: String,
  dob: String,
  compensation: String,
  laws: String,
  nonsensitive: String,
  maximumavailable: String,
  downtime: String,
  monthly: String,
  transactionpm: String,
  staticaccess: String,
  dataprocessor: String,
  access: String,
  licence: String
});


module.exports = mongoose.model('Agreement', agreementSchema);
