import express from "express"

import {registerUser , loginUser , logoutUser , refeshToken } from "../controllers/user.controllers.js";

const router  = express.Router();
