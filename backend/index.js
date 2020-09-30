//Dependencies
const express = require("express");
const app = express();
const cors = require("cors");

const http = require("http");
app.use(cors());
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
io.origins("*:*");
//handlers
const connectionHandler = (socket) => {
  socket.on("drawing", (data) => {
    socket.broadcast.emit("drawing", data); //Broadcast Drawing to other clients
  });
};
//IO
io.on("connection", connectionHandler);
//Server Run
const port = 8080;
server.listen(port, () => console.log(`server is running on port ${port}`));
