var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("*", function(req, resp) {
  resp.sendFile(__dirname + "/public/index.html");
});

app.listen(8080, function() {
  console.log("WebRTC.Rocks app listening on port 8080!");
});
