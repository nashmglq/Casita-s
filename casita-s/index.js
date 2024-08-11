const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./route/route");

// use this for POST methods
app.use(express.urlencoded({extended: true}))  // Parse URL-encoded data into a JavaScript object
app.use(express.static("./public")) // use this for css styling

app.use("/", routes)

app.listen(port, () => {
  console.log(port);
});

