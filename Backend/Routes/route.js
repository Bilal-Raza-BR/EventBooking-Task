const express = require('express');
const validateSubmitRequest=require('../middleware/validateSubmitRequest');
const submitRequest =require("../controller/requestController");
const approveRequest = require("../controller/approveRequest")
const rejectRequest = require("../controller/rejectRequest")
const adminLogin =require("../controller/adminLogin")
const getAllAppointments = require('../controller/getAllAppointments')
const router = express.Router();


// 🧾 User submits event request
router.post("/requstSubmit/api",validateSubmitRequest,submitRequest );

// 📋 Admin gets all requests
router.post('/api/admin-login', adminLogin);

// ✅ Admin approves request
router.put('/api/approve', approveRequest);

// ❌ Admin rejects request
router.put('/api/reject', rejectRequest);

// Get All Appointment data 

router.get("/api/appointments", getAllAppointments);

module.exports = router;