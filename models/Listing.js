var mongoose = require('mongoose');

var listingSchema = new mongoose.Schema({
  title: {type: String},
  description: {type: String},
  reward: {type: String},
  location: {type: String},
  phone: {type: String},
  email: {type: String},
  type: {type: String}
});

module.exports = mongoose.model('Listing', listingSchema);
