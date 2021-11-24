const mongoose = require('../database');

const HeadOfFamilySchema = new mongoose.Schema({

  publisherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
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

const HeadOfFamily = mongoose.model('HeadOfFamily', HeadOfFamilySchema);

module.exports = HeadOfFamily;
