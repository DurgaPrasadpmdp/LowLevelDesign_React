import express from "express";
import router from "./src/ShortPolling_Node/shortPolling.route.js";
import cors from "cors";
import routerLongPolling from "./src/LongPolling_node/LongPolling.js";
import { Server, Socket } from "socket.io";

import http from "http";

const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Server started for real time ");
// });

app.use("/shortPolling", router);
app.use("/longPolling", routerLongPolling);

// web sockets

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow your client app to connect
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Socket connection is established");

  socket.on("chat-message", (msg) => {
    console.log("receieved msg from the client", msg);

    socket.broadcast.emit("send-message", msg);
  });
});

app.listen(9999, () => {
  console.log("successfully running on prot 9999b real time updates");
});

server.listen(9991, () => {
  console.log("web scoket port 9991 successfully running");
});
