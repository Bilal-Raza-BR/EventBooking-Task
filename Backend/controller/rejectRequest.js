import { meetReq } from "../config/db.js"; // ".js" lagana zaroori ho sakta hai depending on your setup

const rejectRequest = async (req, res) => {
    const { id } = req.body;

    try {
        const updatedRequest = await meetReq.findByIdAndUpdate(
            id,
            { status: "rejected" },
            { new: true }
        );

        if (!updatedRequest) {
            return res.status(404).json({
                success: false,
                message: "Request not found!"
            });
        }

        res.status(200).json({
            success: true,
            message: "Request rejected successfully",
            data: updatedRequest
        });

    } catch (error) {
        console.error("Rejection error:", error);
        res.status(500).json({
            success: false,
            message: "Server error during rejection"
        });
    }
};

export { rejectRequest };
