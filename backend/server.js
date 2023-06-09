const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

app.use(express.json());

let postRoutes = require("./routes/postRoutes");
app.use("/api/post", postRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my SQL application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on
port ${PORT}.`);
});
