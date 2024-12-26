import express from "express";

import {registerUser} from "../controllers/users.controllers.js";

const router = express.Router();

// To create User
router.post("/register" , registerUser);

export default router;