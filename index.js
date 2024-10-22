const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.json({ message: "our server is up" });
});
app.listen(3000, () => {
  console.log("server started on port : 3000");
});
