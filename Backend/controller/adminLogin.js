const adminEmail = "Smit@gmail.com";
const adminPassword = "Smit123";

const adminLogin = (req, res) => {
    const { email, password } = req.body;

    if (email === adminEmail && password === adminPassword) {
        return res.status(200).json({
            success: true,
            message: "Admin login successful"
        });
    }

    res.status(401).json({
        success: false,
        message: "Invalid admin credentials"
    });
};

export { adminLogin };
