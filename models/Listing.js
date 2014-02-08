var mongoose = require('mongoose');

var listingSchema = new mongoose.Schema({
  title: {type: String,  required: true},
  description: {type: String, required: true},
  reward: {type: String},
  location: {type: String},
  phone: {type: String},
  email: {type: String},
  type: {type: String}
});

module.exports = mongoose.model('Listing', listingSchema);
