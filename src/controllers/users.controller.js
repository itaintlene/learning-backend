import { asyncHandler } from '../utils/asyncHandler.js'

const registerUser = async (req, res) => {
    try {
        res.status(200).json({ message: "ok" });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};

export { 
    registerUser,
}