const express = require("express");
const db = require('../db/db');
const seed = require('../seed');
const userRouter = require('../routes/user');
const showRouter = require('../routes/show');


const app = express();

const userRouter = require("./user");

app.use("/test", express.static("public"));


app.listen(3000, () => {
    console.log("listening on port 3000");
});