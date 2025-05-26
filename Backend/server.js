const express = require('express');
const app = express();
const port = 5000;
const routes = require('./routes/route');
const cors = require('cors');

app.use(cors());
app.use(express.json());

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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
