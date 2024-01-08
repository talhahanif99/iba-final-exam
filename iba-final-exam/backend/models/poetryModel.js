const mongoose = require('mongoose');


const poetrySchema = new mongoose.Schema({
    poetName: {
      type: String,
      required: true
    },
    poetry: {
      type: String,
      required: true
    },
  });

  const poetryModel = new mongoose.model('Poem', poetrySchema);
  module.exports = poetryModel;