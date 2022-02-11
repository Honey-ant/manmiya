const mongoose = require('mongoose');

const { Schema } = mongoose;

const printSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  size : {
    type: Array,
  },
  medium: {
    type: String
  },
  details: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Print = mongoose.model('Print', printSchema);

module.exports = Print;