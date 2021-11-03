require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_SERVER, { 
  useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connected!');
  })
  .catch(e => console.log(e));

  module.exports = mongoose;