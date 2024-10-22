const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get("/home", (req, res) => {
  res.json({ message: "our server is up" });
});
app.listen(process.env.PORT, () => {
  console.log(`server started on port : ${process.env.PORT}`);
});
