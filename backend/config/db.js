const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/pulseFitdb3", {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;


