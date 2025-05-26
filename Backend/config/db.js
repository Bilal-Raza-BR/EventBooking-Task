import mongoose from 'mongoose';
import 'dotenv/config';

const uri = `mongodb+srv://${process.env.DM_USER}:${process.env.DM_PASSWORD}@cluster0.jdzqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(uri);

const connectedDB = async () => {
    try {
        await mongoose.connect(uri,{autoIndex: false});
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