const mongoose = require('../database');

const PublisherSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    lowercase: true,
  },
  gender: {
    type: String,
    required: true,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  },
  publisherType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PublisherType',
    required: true,
  },
  isFamilyHead: {
    type: Boolean,
    required: true,
    default: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
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

const Publisher = mongoose.model('Publisher', PublisherSchema);

module.exports = Publisher;
