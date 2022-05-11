const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 
  'mongodb://localhost/artStore'
  // 'mongodb://127.0.0.1/artStore'
  , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
