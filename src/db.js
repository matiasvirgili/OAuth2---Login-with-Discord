const mongoose = require('mongoose');
const { MONGODB_URI } = require('./config');

const conexionBD = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  conexionBD,
};
