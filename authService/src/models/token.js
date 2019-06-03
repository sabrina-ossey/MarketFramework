const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  token: String,
	accessTokenExpiresAt: Date,
	client: Object,
	user: Object,
  agreementID: String
});


module.exports = mongoose.model('Token', tokenSchema);
