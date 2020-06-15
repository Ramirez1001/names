const express = require("express");
const router = express.Router();
const nameSchema = require("../MongoDB/names");

router.get("/", async (req, res, next) => {
    let schema = await nameSchema.find();
    res.render("admin", {schema});
});

router.get("/delete/:id", (req, res, next) => {
    let id = req.params.id;
    nameSchema.findByIdAndRemove(id, (err, product) => {
        if(err) return res.send("Error cannot delete user with id " + id);
        res.redirect("/admin?admin=true");
    })
});

module.exports = router;