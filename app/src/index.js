const express = require("express");
const PORT = 3000;
const MSG = "Hello World";

app = express();

app.all("*", function(_req, res, _next) {
  return res.json({ MSG });
});

app.listen(3000, function() {
  console.log(`App running on ${PORT}`);
});
