const express = require("express");
const db = require('./db/db');
const seed = require('./seed');
const userRouter = require('./routes/user');
const showRouter = require('./routes/show');


const app = express();

app.use("/users", userRouter);
app.use("/shows", showRouter);


app.listen(5000, async () => {
    await seed()
    console.log("listening on port 5000");
});