import express from "express";

const routerLongPolling = express.Router();

let profileData = {
  name: "Durga Prasad",
  email: "du@gmail.com",
  role: "Front - End Engineer",
  age: 25,
};

const reqhandler = [];
routerLongPolling.get("/", (req, res) => {
  res.status(200).send(profileData);
});

routerLongPolling.post("/updateprofile", (req, res) => {
  console.log(req.body);
  const data = req?.body;
  profileData = data;
  if (reqhandler.length > 0) {
    const REQ = reqhandler.pop();
    REQ.send(profileData);
  }
  res.status(200).send("data Updated");
});

routerLongPolling.get("/updated", (req, res) => {
  reqhandler.push(res);
});

export default routerLongPolling;
