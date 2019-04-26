const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
// connect to your db
app.use(bodyParser.json());
// serve up whatever you need to be served
app.get("/api", (req, res) => res.json({ msg: "hello" }));

app.get("/asdf", (req, res) => {
  const jay = "long hair";
  res.send(`<h1>${jay}</h1>`);
});

app.post("/asdf", (req, res) => {
  res.json({ body: req.body.username });
});
app.use("/", express.static("public"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
