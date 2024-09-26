import express from "express";

const router = express.Router();

let profileData = {
  name: "Durga Prasad",
  email: "du@gmail.com",
  role: "Front - End Engineer",
  age: 25,
};

router.get("/", (req, res) => {
  res.status(200).send(profileData);
});

router.post("/updateprofile", (req, res) => {
  console.log(req.body);
  const data = req?.body;
  profileData = data;
  res.status(200).send("data Updated");
});

export default router;
