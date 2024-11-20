import { Router } from "express";
import { registerUser } from '../controllers/users.controller.js'

const router = Router()

router.route("/register").post((req, res, next) => {
    console.log("Register route hit!"); // Debug log
    next(); // Pass control to the actual handler
}, registerUser);
// router.route("/login").post(loginUser)

export default router;