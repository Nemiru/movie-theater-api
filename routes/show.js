const { Router } = require("express");
const Show = require("../models/Show");
const showRouter = Router();
//const { body, validationResult } = require('express-validator')


showRouter.get("/shows", async (req, res) => {
    res.status(200).send(await Show.findAll());
})

showRouter.get("/:showId", async (req, res) => {
    res.status(200).send(await Show.findOne())
})

showRouter.get("/genres/:genre", async (req, res) => {
    // get shows of particular genre (genre in req.parms)
    //res.send(show[req.params.genre])
    res.send(await Show.findAll({where: {genre:req.params.genre}}))
    
})

showRouter.put("/shows/:showId/watched", async (req, res) => {
    // update the status of a show that has been watched
    const watched = await Show.findByPk(req.params.showId)
    await watched.update({rating: req.body.rating})
    res.send("updated rating")
})

showRouter.put("/:showId/updates", async (req, res) => {
    // update the status of a show
    const update = await Show.findByPk(req.params.showId)
    if(update.status === 'canceled'){
    } else {
        update.status = "canceled"
    } res.status(200).send("updated show")
})

showRouter.delete("/:showId", async (req, res) =>  {
    const remove = await Show.findByPk(req.params.showId);
    await remove.destroy();
    res.send("removed show")
})

module.exports = showRouter;
