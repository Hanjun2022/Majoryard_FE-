const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const connection=require("./config/db.js");

const { Server } = require("socket.io");
app.use(cors());
const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {

    socket.to(data.room).emit("received_message", data);
    connection.query( "INSERT INTO CHAT ( USER_NO, time,  CHAT_CONTENTS) VALUES (?,?,?)",
    [  data.author ,data.time, data.message], function(err, result) {
      if (err) {
        console.error("Error:", err);
        // 적절한 에러 핸들링
      } else {
        console.log("Success Input the DB");
      }
    });
    console.log("Hi S");
  });

  socket.on("leave_room", (data) => {
    socket.leave(data.room);
    //console.log(`User with ID: ${socket.id} left room: ${data.room}`);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});