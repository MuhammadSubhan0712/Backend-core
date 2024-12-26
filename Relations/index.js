import express from "express"
import dotenv from  "dotenv"
import cors from "cors"
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/" , (req , res ) => {
    res.send("HeLlO rElATi0n");
})

app.listen( process.env.PORT , () => {
    console.log(`⚙️ Server is runnning at the port ${process.env.PORT}`);
});

