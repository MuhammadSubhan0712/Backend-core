import express from "express"
import { placeOrder } from "../controllers/order.controller.js"

const router = express.Router();


// To make a order 
router.post("/order" ,placeOrder);


export default router;