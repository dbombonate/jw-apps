const mongoose = require('../database');

const PublisherTypeSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true,
    unique:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const PublisherType = mongoose.model('PublisherType', PublisherTypeSchema);

module.exports = PublisherType;