// External Dependancies
const mongoose = require('mongoose');

const monitoringSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  monitoredData: String,
  uri: String,
  hash: String,
  hashIdNode: String,
  groupId: String,
  proof: String,
  anchorsComplete: [String],
  hashIdCore: String,
  hashSubmittedNodeAt: Date,
  hashSubmittedCoreAt: Date,
  branch: String,
  type: {type: String},
  anchorId: String,
  expectedValue: String,
  verified: Boolean,
  verifiedAt: Date
});

module.exports = mongoose.model('Monitoring', monitoringSchema);
