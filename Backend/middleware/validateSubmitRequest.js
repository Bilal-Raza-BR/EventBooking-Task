
const validateSubmitRequest = (req, res, next) => {
    const { name, email, description, time, status } = req.body;

    if (!name || !email || !description || !time || !status) {
        return res.status(400).json({
            success: false,
            message: "Har field required hai: name, email, description, time, status"
        });
    }

    next();
};

module.exports = validateSubmitRequest;
