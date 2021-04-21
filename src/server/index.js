// jshint esversion:8
const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
const FormData = require("form-data");
const fetch = require("node-fetch");
// const bodyParser = require("body-parser");
const cors = require("cors");
// const mockAPIResponse = require("./mockAPI.js");

const app = express();
app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
console.log(__dirname);

const API_KEY = process.env.API_KEY;

// :::::: fetch meaining cloud API ::::::

const getData = async (userText) => {
  // request data
  const formdata = new FormData();
  formdata.append("key", API_KEY);
  formdata.append("txt", userText);
  formdata.append("lang", "en"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
  try {
    const status = response.status;
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(`error : ${error}`);
  }
};

// :::::: get/post routes ::::::

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("dist/index.html"));
});

app.post("/test", (req, res) => {
  console.log(req.body);
  // res.send({ status: "oook" });
  getData(req.body.text).then((data) => {
    res.send(data);
    // console.log(data);
  });
});

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 8081, function () {
  console.log("Example app listening on port 8081!");
});
