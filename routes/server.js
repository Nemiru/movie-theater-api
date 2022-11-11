const express = require("express");
const app = express();

const userRouter = require("./user");

app.use("/test", express.static("public"));


app.listen(3000, () => {
    console.log("listening on port 3000");
});