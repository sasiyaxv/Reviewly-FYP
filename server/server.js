// Importing the http module
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { execFile } = require("child_process");

const sqlite3 = require("sqlite3").verbose();

const re = require("re");

// ADD THIS
var cors = require("cors");
app.use(cors());

// Middleware for parsing request bodies
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());

app.get("/hello", (req, res, next) => {
  res.send("This is the hello response");
});

app.get("/:url", (req, res) => {
  const url = req.params.url;
  res.send(`Received URL: ${url}`);
});

app.post("/toSinhala/:str", (req, res) => {
  const sentence = req.params.str;

  if (!sentence) {
    return res.status(400).send("No sentence provided");
  }

  const pythonScriptPath = "translation/transliterate.py";
  const methodName = "Translate";
  const methodArgs = [sentence];

  execFile(
    "python",
    [pythonScriptPath, methodName, ...methodArgs],
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);

      res.send(`${stdout}`);
    }
  );
});

app.post("/toEnglish", (req, res) => {
  const sentence = req.body.str;

  if (!sentence) {
    return res.status(400).send("No sentence provided");
  }

  const pythonScriptPath = "translation/translate.py";
  const methodName = "googleTranslate";
  const methodArgs = [sentence];

  execFile(
    "python",
    [pythonScriptPath, methodName, ...methodArgs],
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);

      res.json({
        result: `${stdout}`,
      });
    }
  );
});

app.post("/isEnglish/:str", (req, res) => {
  const sentence = req.params.str;

  if (!sentence) {
    return res.status(400).send("No sentence provided");
  }

  const isEnglishLetters = /^[a-zA-Z\s]+$/.test(sentence);

  return isEnglishLetters;
});

app.post("/isSinhala", (req, res) => {
  const sentence = req.body.str;
  console.log("Body :" + sentence);

  if (!sentence) {
    return res.status(400).send("No sentence provided");
  }

  const isSinhala = /^[\u0D80-\u0DFF\u200D\s]+$/.test(sentence);
  res.json({
    result: isSinhala,
  });
});

app.get("*", (req, res) => {
  res.send("Invalid route");
});

// user actions

const db = new sqlite3.Database("logins.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the database.");
  }
});

// Create user

app.post("/createuser", (req, res) => {
  const { id, fName, lName, mail, passWord, reviews } = req.body;

  console.log("ID" + id);
  const fname = req.body.fname;
  console.log(fname);

  db.run(
    `INSERT INTO reviewly(userId,firstName,lastName,email,password,reviews) VALUES (?,?,?,?,?,?)`,
    [id, fName, lName, mail, passWord, reviews],
    function (err) {
      if (err) {
        console.error(err.message);
        res.status(500).send("Error inserting record.");
      } else {
        console.log(`A row has been inserted with rowid ${this.lastID}`);
        res.send("Record inserted successfully.");
      }
    }
  );
});

// Server listening to port 3001
app.listen(3001, () => {
  console.log("Server is Running");
});
