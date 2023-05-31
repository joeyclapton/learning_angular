const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
server.listen(process.env.PORT || 9999, function () {
  console.log(
    "Server connected. Listening on port: " + (process.env.PORT || 9999)
  );
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/front"));
app.get("/test", function (req, res) {
  //example http request receiver return res.send(myTestVar);
});
//send the index.html on every page refresh and let angular handle the routing
app.get("/*", function (req, res, next) {
  console.log("Reloading");
  res.sendFile("index.html", { root: __dirname });
});
