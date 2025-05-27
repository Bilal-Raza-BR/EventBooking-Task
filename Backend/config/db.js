import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGO_URI
console.log(uri);

const connectedDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection error:", err);
    }
};

// Product Schema
const UserSchema = new mongoose.Schema({
   name: String,
    email: String,
    date: Date,
    description: String,
    time : String,
    status : String
});

const meetReq = mongoose.model('Appointment', UserSchema);
export { connectedDB, meetReq };