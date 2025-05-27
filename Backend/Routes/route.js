import express from 'express';
import validateSubmitRequest from '../middleware/validateSubmitRequest.js';
import submitRequest from '../controller/requestController.js';
import approveRequest from '../controller/approveRequest.js';
import rejectRequest from '../controller/rejectRequest.js';
import adminLogin from '../controller/adminLogin.js';
import getAllAppointments from '../controller/getAllAppointments.js';

const router = express.Router();

// 🧾 User submits event request
router.post("/requstSubmit/api", validateSubmitRequest, submitRequest);

// 📋 Admin gets all requests
router.post('/api/admin-login', adminLogin);

// ✅ Admin approves request
router.put('/api/approve', approveRequest);

// ❌ Admin rejects request
router.put('/api/reject', rejectRequest);

// 📅 Get All Appointments
router.get("/api/appointments", getAllAppointments);

export default router;
