const { Router } = require("express");
const { Show } = require("../models");
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
    const user = await User.findByPk()
    res.send(await user.getShows())
    //res.send(User[req.params.userId])
})

userRouter.put("/user/:userId/shows/", async (req, res) => {
    // update and add a show if a user has watched it
    const user = await User.findByPk(req.params.userId)
    const show = await Show.findByPk(req.params.showId)
    await user.addShow(show)
    res.send("show added to user")
})


module.exports = userRouter;
