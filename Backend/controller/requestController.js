import { meetReq } from "../config/db.js";

const submitRequest = async (req, res, next) => {
    const { name, email, description, time, status } = req.body;

    try {
        const newAppointment = new meetReq({
            name,
            email,
            description,
            time,
            status,
            date: new Date()  
        });

        await newAppointment.save();

        res.status(201).json({
            success: true,
            message: "Appointment request successfully submitted!",
            data: newAppointment
        });

    } catch (error) {
        console.error("Error saving appointment:", error);
        res.status(500).json({
            success: false,
            message: "Kuch ghalti ho gayi, try again later."
        });
    }
};

export default submitRequest;
