const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI  || 
  'mongodb+srv://MunmiaB:Winyuwa@artworks.ajnml.mongodb.net/?retryWrites=true&w=majority'
  // 'mongodb://localhost/artStore'
  // 'mongodb://127.0.0.1/artStore'
  
  , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// const mongoDB = process.env.MONGODB_URI;

// mongoose.connect(mongoDB, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

module.exports = mongoose.connection;


