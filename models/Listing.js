var mongoose = require('mongoose');

var listingSchema = new mongoose.Schema({
  title: {type: String,  required: true},
  description: {type: String, required: true},
  reward: {type: String},
  location: {type: String},
  phone: {type: String},
  email: {type: String},
  type: {type: String},
  createdAt: {type: Number}
});

listingSchema.pre('save', function(next) {
    var d=new Date();
    this.createdAt= d.getTime();
    next();
});


module.exports = mongoose.model('Listing', listingSchema);
