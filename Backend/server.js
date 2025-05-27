// server.js
import express from 'express';
import cors from 'cors';
import routes from './Routes/route.js'; // .js lagana zaroori hai
import { connectedDB } from './config/db.js';
const app = express();
const port = 5000;


connectedDB();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// 404 error handler
app.use((req, res, next) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

// General error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Server error' });
});

// Server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
