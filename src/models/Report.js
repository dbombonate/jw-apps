const mongoose = require('../database');

const ReportSchema = new mongoose.Schema({

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
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true,
  },
  user: {
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

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;