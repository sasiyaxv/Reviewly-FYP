// Importing the http module
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { spawn } = require("child_process");
const re = require("re");
const translator = require("deepl-translator");

const dictionary = require("dictionary-en");

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.get("/hello", (req, res, next) => {
  res.send("This is the hello response");
});

app.get("/:url", (req, res) => {
  const url = req.params.url;
  res.send(`Received URL: ${url}`);
});

app.post("/toEnglish/:str", (req, res) => {
  const sentence = req.params.str;
  // const pythonScript = spawn('python', ['translation/translate.py']);
  const scriptArgs = ["translation/translate.py", "googleTranslate", sentence];
  // Run the Python script
  const pythonScript = spawn("python", scriptArgs);
  pythonScript.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  

  res.send(pythonScript);
});

app.post("/isEnglish/:str", (req, res) => {
  const sentence = req.params.str;

  if (!sentence) {
    return res.status(400).send("No sentence provided");
  }

  const isEnglishLetters = /^[a-zA-Z\s]+$/.test(sentence);

  return isEnglishLetters;
});

app.get("/isSinhala/:str", (req, res) => {
  const sentence = req.params.str;

  const isSinhala = /^[\u0D80-\u0DFF\u200D\s]+$/.test(sentence);
  res.send(isSinhala);
});

// app.get("/fetchdata/:url", (req, res) => {
//   const url = req.params.url;
//   res.send(`Received URL: ${url}`);

// const c = new Crawler({
//   maxConnections: 10,
//   // This will be called for each crawled page
//   callback: (error, res, done) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(res);
//       //   const $ = res.$;
//       // $ is Cheerio by default
//       //a lean implementation of core jQuery designed specifically for the server
//       //   console.log($("title").text());
//     }
//     done();
//   },
// });
// c.queue(
//   "https://www.daraz.lk/products/lenovo-he05-neckband-earphone-i170068876-s1118723103.html?spm=a2a0e.home.just4u.22.49714625YL7qcO&scm=1007.28811.295250.0&pvid=0d7c91a7-d01a-4d2b-bdd2-aa3259f027c5&clickTrackInfo=pvid%3A0d7c91a7-d01a-4d2b-bdd2-aa3259f027c5%3Bchannel_id%3A0000%3Bmt%3Ahot%3Bitem_id%3A170068876%3B"
// );

app.get("*", (req, res) => {
  res.send("Invalid route");
});

// Server listening to port 3001
app.listen(3001, () => {
  console.log("Server is Running");
});
