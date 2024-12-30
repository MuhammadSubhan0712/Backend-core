import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to the server");
});

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const ul = document.querySelector("ul");

const arr = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  socket.emit("message", input.value);
  console.log("message send");
});

socket.on("message", (message) => {
  arr.push(message);
  console.log("Message from server", message);
  ul.innerHTML = "";
  arr.map((item) => {
    ul.innerHTML += `<li>📨  ${item}  📨</li>`;
  });
});
