const mongoose = require('../database');

const FamilySchema = new mongoose.Schema({

  familyName: {
    type: String,
    required: true
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

const Family = mongoose.model('Family', FamilySchema);

module.exports = Family;
