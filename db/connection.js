// include mongoose
const mongoose = require('mongoose');
// link i get from connect atlas





const connectDB = (url) =>{
     return  mongoose.connect(url, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true
     })
}

module.exports = connectDB