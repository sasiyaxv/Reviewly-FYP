const express = require("express");
const app = express();
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json({ limit: "10mb" }));

let db = new sqlite3.Database("logins.db", (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("Connected to the database");
});

app.post("/validatePassword", (req, res) => {
  const { userName, passWord } = req.body;
});

app.listen(3001, () => console.log("Listening at port 3001"));
