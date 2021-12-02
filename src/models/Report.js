const mongoose = require('../database');

const ReportSchema = new mongoose.Schema({

  reportMonth: {
    type: Number,
    require: true,
  },
  reportYear: {
    type: Number,
    required: true,
  },
  reportHours: {
    type: Number,
    required: true,
  },
  reportVideos: {
    type: Number,
    required: true,
  },
  reportPublications: {
    type: Number,
    required: true,
  },
  reportRevisits: {
    type: Number,
    required: true,
  },
  reportBibleStudy: {
    type: Number,
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
