const express = require("express");
const app = express();

const Api = require("./routes/api");

const PORT = 3000;

Api(app);

app.listen(PORT, () => console.log("running on port 3000"));
