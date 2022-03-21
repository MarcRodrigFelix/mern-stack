const mongoose = require('mongoose'); // import MONGOOSE DB

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI) //connect to mongooseDB from variable in .env
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  };
};

module.exports = connectDB;