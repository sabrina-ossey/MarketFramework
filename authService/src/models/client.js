const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  clientSecret: String,
  grants: String
});


module.exports = mongoose.model('User', clientSchema);
