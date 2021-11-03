const mongoose = require('../database');

const GroupSchema = new mongoose.Schema({

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

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;