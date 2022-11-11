const { Router } = require("express");
const Show = require("../models/Show");
const showRouter = Router();
const { body, validationResult } = require('express-validator')


showRouter.get("/shows", async (req, res) => {
    // get all shows
    res.send(await Show.findAll());
})

showRouter.get("/show/:showId", async (req, res) => {
    // get one show
    res.send(await Show.findOne())
})
showRouter.get("/shows/gennres/:genre", async (req, res) => {
    // get shows of particular genre (genre in req.parms)
    res.send(show[req.params.genre])

})

showRouter.put("/shows/:showId/watched", async (req, res) => {
    //update rating of a show that has been watched
    res.send(await Show)

})

showRouter.put("/shows/:showId/watched", async (req, res) => {
    // update the status of a show
    res.send(Show)
})

showRouter.delete("/shows", async (req, res) =>  {
    //delete a show
    req.user.destroy( await Show)
})

module.exports = showRouter;
