import express from "express";
import router from "./src/ShortPolling_Node/shortPolling.route.js";
import cors from "cors";
import routerLongPolling from "./src/LongPolling_node/LongPolling.js";
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server started for real time ");
});

app.use("/shortPolling", router);
app.use("/longPolling", routerLongPolling);

app.listen(9999, () => {
  console.log("successfully running on prot 9999b real time updates");
});
