const mongoose = require("mongoose");

const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/magic-chat")
        console.log("Database connected 📀.");
    } catch(error) {
        console.error("Database connection failed ❌.");
        process.exit(1);
    }
}

module.exports = connectDB;