import express from "express"
import http from "http"
import { Server } from "socket.io"


const app = express();

const server = http.createServer(app);

const io  = new Server (server , {
    cors: { 
        origin: "http://localhost:5500",
        methods: ["GET" , "POST"],
    }
});

io.on("connection" , (socket) => {
    
})
