import { meetReq } from "../config/db";

const approveRequest = async (req, res) => {
    const { id } = req.body;

    try {
        const updatedRequest = await meetReq.findByIdAndUpdate(
            id,
            { status: "approved" },
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
            message: "Request approved successfully",
            data: updatedRequest
        });

    } catch (error) {
        console.error("Approval error:", error);
        res.status(500).json({
            success: false,
            message: "Server error during approval"
        });
    }
};

export { approveRequest };
