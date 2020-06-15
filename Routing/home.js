const express = require("express");
const router = express.Router();
const nameSchema = require("../MongoDB/names");
const bodyParser = require("body-parser");

router.get("/", async (req, res, next) => {
    let schema = await nameSchema.find();
    res.render("index", {schema});
}); 

router.post("/publish", async(req, res, next) => {
    let body = req.body;
    if(body.name.length <= 1) return res.status(401).send("your name must have more than 1 characters");
    if(body.name.match(/\d|[°!"#$%&/()=?¡"]/)) return res.status(401).send("Your name cannot contain symbols or numbers...");
    let saveSchema = new nameSchema({name: body.name.toLowerCase()});
    saveSchema.save((err, product) => {
        if(err) return res.status(500).send("Try again we found an error...");
        res.redirect("/");
    });
});

module.exports = router;