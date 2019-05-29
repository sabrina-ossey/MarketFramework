const mongoose = require('mongoose');

const proofSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  monitoredData: String,
  proofs: [{
    hashIdNode: String,
    proof: String,
    anchorsComplete: [String]
  }],
});
module.exports = mongoose.model('Proofs', proofSchema);
