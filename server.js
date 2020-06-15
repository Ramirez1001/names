const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = 3000 || process.env.PORT;


function admin(req, res, next){
    if(req.query.admin == "true"){
        next();
    }else{
        res.status(400).send("Page not found :(");
    }
}

/* VIEWS */

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

/* MIDDLEWARES */

app.use(express.static(path.join(__dirname, "/Public")));
app.use(bodyParser({extended: true}));
app.use(require("./Routing/home"));
app.use("/admin", admin);
app.use("/admin", require("./Routing/admin"));

/* SERVER */

app.listen(port, () => console.log(`Listening port: ${port}`));