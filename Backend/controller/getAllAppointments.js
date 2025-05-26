import { meetReq } from "../config/db.js";

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await meetReq.find().sort({ date: -1 }); // Latest pehle

    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching appointments",
    });
  }
};

export { getAllAppointments };
