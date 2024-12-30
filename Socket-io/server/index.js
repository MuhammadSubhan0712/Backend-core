import express from "express";
import http from "http";
import { Server } from "socket.io";
import { isObject } from "util";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5500",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected: ", socket.id);

  socket.on("message" , (message) => {
    console.log("user message ==>" , message);

    io.emit("message" , message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("<h1>HeLLo sOckeT IO</h1>");
});

server.listen(3000, () => {
  console.log("listening on port : 3000");
});
