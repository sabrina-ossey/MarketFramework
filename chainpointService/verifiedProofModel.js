// External Dependancies
const mongoose = require('mongoose');

const verifiedProofSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  monitoredData: String,
  verifiedProofs: [{
    hash: String,
    hashIdNode: String,
    hashIdCore: String,
    hashSubmittedNodeAt: Date,
    hashSubmittedCoreAt: Date,
    branch: String,
    uri: String,
    type: {type: String},
    anchorId: String,
    expectedValue: String,
    verified: Boolean,
    verifiedAt: Date
  }]
});

module.exports = mongoose.model('VerifiedProof', verifiedProofSchema);
