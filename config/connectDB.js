const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
    console.log("Database is connected...");
  } catch (error) {
    console.log("Database is not connected !!!!!", error);
  }
};

module.exports = connectDB;
