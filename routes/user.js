const { Router } = require("express");
const User = require("../models/User");
const userRouter = Router();

userRouter.get("/user/:userId", async (req, res) => {
    // get one 
    res.send(await User.findOne(userId));
})

userRouter.get("/user", async (req, res) => {
    res.send(await User.findAll());
})

userRouter.get("/user/:userId/shows", async (req, res) => {
    // get all shows watched by a user( user id in req.params)
    res.send(User[req.params.userId])
})

userRouter.put("/user/:userId/shows/", async (req, res) => {
    // update and add a show if a user has watched it
    res.send(User[req.params.userId])
})


module.exports = userRouter;
