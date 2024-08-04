import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Fund Bux backend");
});

app.listen(4000, () => {
  console.log("Server running on Port: 4000");
});
