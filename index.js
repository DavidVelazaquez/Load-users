const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const homeRoute = require("./routes/users");
const Api = require("./routes/api");

const PORT = 3000;
app.use(bodyParser.json());
app.use(express.urlencoded());

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", homeRoute);
Api(app);

app.listen(PORT, () => console.log(`running on port ${PORT}`));
